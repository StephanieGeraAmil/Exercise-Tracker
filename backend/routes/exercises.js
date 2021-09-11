const router= require('express').Router();
const Exercise= require('../models/exercise.model.js');
//get all exercises 
router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('Error: '+err));
});

//add a exercise
router.route('/add').post((req,res)=>{
    const username= req.body.username;
    const description= req.body.description;
    const duration= Number(req.body.duration);
    const date= Date.parse(req.body.date);

    const newExe= new Exercise({username,description,duration,date});
    newExe.save()
    .then(()=>res.json('Exercise Added'))
    .catch(err=>res.status(400).json('Error: '+err));
});
//get a exercise by id
router.route('/:id').get((req,res)=>{
   
    Exercise.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('Error: '+err));
});

//update a exercise by id
router.route('/update/:id').put((req,res)=>{
    
    Exercise.findById(req.params.id)
    .then(exercise=>{
        if(req.body.date) exercise.date=Date.parse(req.body.date);
        if(req.body.duration) exercise.duration=Number(req.body.duration);
        if(req.body.username) exercise.username=req.body.username;
        if(req.body.description) exercise.description=req.body.description;
       exercise.save().then(()=>{res.json(exercise)}).catch(err=>res.status(400).json('Error: '+err));
        })
    .catch(err=>res.status(400).json('Error: '+err));
});
//delete a exercise by id
router.route('/delete/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise=>res.json('exercise deleted'))
    .catch(err=>res.status(400).json('Error: '+err));
});




module.exports= router;