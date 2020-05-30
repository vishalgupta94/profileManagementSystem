const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require("express-validator"); ///check
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config= require("config");
const User = require("../../models/User");

// @route  GET api/auth
// @desc   Test route
// @access Public
router.get("/", auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "auth server error" + err });
    }
   // res.send("auth route");
})



// @route  POST api/auth
// @desc   Login user
// @access Public

router.post("/", [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'please enter a password').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const {  email, password } = req.body;
        let user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ errors: [{ msg: "user with the email doesn't exist" }] });
        }
         
        const isMatch= await bcrypt.compare(password,user.password);

        if(!isMatch){
        	return res.status(400).json({ errors: [{ msg: "password is wrong" }] });
        } 
        const payload= {
        	user: {
        		id:user.id
        	}
        }

        jwt.sign(payload,config.get('jwtSecret'),{
        	expiresIn: 360000
        },(err,data)=>{
        	if(err){
               res.status(500).json({errors:[{msg:"jwt error"+err}]});
        	}else{
        		console.log("daya",data);
               return res.status(200).json({token:data})
        	}
        })
        //res.send("users registered");
    } catch (err) {
        console.log(err.message);
        res.status(500).json({errors:[{msg:"server error"}]});
    }


})


module.exports = router;