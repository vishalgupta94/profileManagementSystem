const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require("express-validator");
// @route  GET api/profile
// @desc   Test route
// @access Public
const Profile = require("../../models/Profile");
const User = require("../../models/User");

router.get("/me", [auth], async (req, res) => {

    try {
        const profile = await Profile.findOne({ user: req.user.id })
            .populate('user', ['name']);

        if (!profile) {
            return res.status(400).json({ msg: 'there is not profile for this user' });
        }
        return res.json(profile);
    } catch (e) {
        console.log("error profile")
        res.status(500).send('server error');
    }

})

//create or update a profile
// post request that takes data
router.post("/", [auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills is required').not().isEmpty()
]], async (req, res) => {


 console.log("REACHED 11111")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = req.body;

    // build profile  object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;

    if (skills) {
        
        try{
            console.log("skills",skills);
            skills.split(',');
          }catch(err){
             console.log("error skills",err);
          }
        profileFields.skills = skills;//.split(',').map(item => item.trim())
    }

    //build social array
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    console.log(profileFields.skills);
 console.log("REACHED4")

    try {
        let profile = await Profile.findOne({ user: req.user.id });
        if (profile) {
            //updatec
            console.log("profle update");
            profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });
            return res.json(profile);
        }
console.log("HEREHEREHERE PROFILE CREATE")
        //create a profile
        console.log("profle create");        
        profile = new Profile(profileFields);
        await profile.save();
        return res.json(profile);

    } catch (e) {
        console.error("e while creating profile", e);
        res.status(500).send("Server Error");
    }
})

//  get api/profile
//  Create or update user profile
//

router.get("/",async (req,res)=>{
  
       try{ 
            const profiles=await Profile.find().populate('user',['name']);
            res.status(200).json(profiles);
       }catch(err){
       	   console.log("get all profile error",err);
       	   res.status(500).send("Server Error");
       }

  })
 
//  get api/profile/user/:user_id
//  Create profile by user ID
//  public

router.get("/user/:user_id",async (req,res)=>{
  
       try{ 
            const profile=await Profile.findOne({user:req.params.user_id})
                                               .populate('user',['name']);
            

            if(!profile){
            	console.log("profile by used is not found");
            	return res.status(400).json({msg:"there is no profile for  user"})
            }
            console.log("profile by used is found");
            return res.json(profile);
       }catch(err){
       	   if(err.kind=='ObjectId'){
       	   	return res.status(400).json({msg:"profie not found"})
       	   }
       	   console.log("get all profile error",err);
       	   res.status(500).send("Server Error");
       }

  })
 

//  Delete api/profile
//   Delete profile,user & posts
//
router.delete("/", auth, async (req, res) => {

    try {
          await Profile.findOneAndRemove({ user: req.user.id })
          await User.findOneAndRemove({ _id: req.user.id })
          return res.json({mag:"user removed deleted"});
    } catch (e) {
        console.log("error profile and user delete")
        res.status(500).send('server error');
    }

})



//put /api/profile/experience
//add profile experience


router.put("/experience",[auth,[
         check('title','Title is required').not().isEmpty(),
         check('company','Company is required').not().isEmpty(),
         check('from',"from date is required").not().isEmpty()         
    ]],async(req,res)=>{
         const errors = validationResult(req);

         if(!errors.isEmpty()){
              return res.status(400).json({errors:errors.array()});
         }

         const {
            title,
            company,
            location,
            from,
            to,
            current,
            description
         }= req.body;


         const newExp = {
            title,
            company,
            location,
            from,
            to,
            current,
            description
         }

         try{  
               console.log("experience added part ran ");
               const profile= await Profile.findOne({user:req.user.id});
               console.log("profile",profile)
               profile.experience.unshift(newExp);
                 await profile.save();
              res.json(profile); 
         }catch(err){
              console.log("education experience gave me the error",err);
              res.status(500).send('sever error'); 
         }
})



router.delete("/experience/:exp_id",auth,async(req,res)=>{
    try{
              console.log("delete experience start");
              const profile = await Profile.findOne({user:req.user.id});
              console.log("profile.found",profile);
              const removeIndex = profile.experience.map(item=>item.id)
                    .indexOf(req.params.exp_id);
              profile.experience.splice(removeIndex,1);
              await profile.save();
              console.log("delete experience success");
              res.json(profile);       

    }catch(err){
          console.log("error deleting the experience of the profile",err);
           res.status(500).send('server error');

    }


})


router.put("/education",[auth,[
         check('school','Title is required').not().isEmpty(),
         check('degree','Company is required').not().isEmpty(),
         check('from',"from date is required").not().isEmpty() ,
         check('fieldofstudy',"field of study").not().isEmpty()         
    ]],async(req,res)=>{
         const errors = validationResult(req);

         if(!errors.isEmpty()){
              return res.status(400).json({errors:errors.array()});
         }

         const {
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description
         }= req.body;


         const newEdu = {
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description
         }

         try{  
               console.log("education added part ran ");
               const profile= await Profile.findOne({user:req.user.id});
               console.log("profile",profile)
               profile.education.unshift(newEdu);
                 await profile.save();
              res.json(profile); 
         }catch(err){
              console.log("education gave me the error",err);
              res.status(500).send('sever error'); 
         }
})

//delete eduction
router.delete("/education/:exp_id",auth,async(req,res)=>{
    try{
              console.log("delete education start");
              const profile = await Profile.findOne({user:req.user.id});
              console.log("profile.found",profile);
              const removeIndex = profile.education.map(item=>item.id)
                    .indexOf(req.params.exp_id);
              profile.education.splice(removeIndex,1);
              await profile.save();
              console.log("delete education success");
              res.json(profile);       

    }catch(err){
          console.log("error deleting the education of the profile",err);
           res.status(500).send('server error');

    }


})

module.exports = router;