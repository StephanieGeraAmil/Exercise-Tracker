const router= require('express').Router();
const User= require('../models/user.model.js');

router.route('/').get((req,res)=>{
    User.find()
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error: '+err));
});


router.route('/add').post((req,res)=>{
    const username= req.body.username;
    const newUsr= new User({username});
    newUsr.save()
    .then(()=>res.json('User Added'))
    .catch(err=>res.status(400).json('Error: '+err));
});

module.exports= router;

