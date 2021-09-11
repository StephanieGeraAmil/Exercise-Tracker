const express= require('express');
const dotenv= require('dotenv');
const cors= require('cors');
const mongoose= require('mongoose');


dotenv.config()
const app= express();

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true})

const connection= mongoose.connection;
connection.once('open', ()=>console.log('Mongo DB connection established successfully'));


const exercisesRouter= require('./routes/exercises')
const usersRouter= require('./routes/users')



app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

const port= process.env.PORT || 5000;
app.listen(port, ()=> console.log(`server running on port ${port}`));
