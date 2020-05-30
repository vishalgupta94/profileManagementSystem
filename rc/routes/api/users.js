const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator"); ///check
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config= require("config");
// @route  GET api/users
// @desc   Register user
// @access Public

const User = require("../../models/User");
router.post("/", [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'please enter a password with 6 or more chanracter')
    .isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ errors: [{ msg: "user with the email already exist" }] });
        }
        user = new User({
        	name,
        	email,
        	password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

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