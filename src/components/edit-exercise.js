import React, {useState,useEffect} from 'react'
import {updateExercise, getExercise }from '../services/Exercise.js'
import {getAllUsers }from '../services/User.js'
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router';
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = () => {
    let { id } = useParams();
   // const param= match.params;
  
    const [description,setDescription] = useState('');
    const [duration,setDuration] = useState('');
    const [date,setDate] = useState(new Date());
    const [user,setUser] = useState('');
    const [users,setUsers] = useState([]);

  
   
    
      useEffect(()=>{
        //getting the exercise to edit and charging the fields with its values
        
        getExercise(id).then(res =>{
                   
                    const exerciseToEdit=res.data;
                    setDescription(exerciseToEdit.description);
                    setDuration(exerciseToEdit.duration);
                    setDate(new Date(exerciseToEdit.date));
                    setUser(exerciseToEdit.username);
                  
            }).catch();

          ///charging the drop down options
        let usrs=[];
        getAllUsers().then(res =>{
                res.data.map( u=>usrs.push(u.username))
                setUsers(usrs);
           }).catch();
      },[]);

    return (
        <div>
            <div className="container p-2">
          <h3>Edit the Exercise</h3>
          <form onSubmit={(e)=>{e.preventDefault();
                                    
                                    const exercise = {
                                                   _id: id,
                                                    username: user,
                                                    description: description,
                                                    duration: duration,
                                                    date:date
                                                  }
                                               
                                                  updateExercise(exercise)
                                                    .then(res => {console.log(res.data)
                                                                     window.location = '/';
                                                    }).catch();
                                    }}>
              <div className="form-group">
                  <label className="m-2">User: </label>
                  <select 
                            required
                            className="form-control"
                            value={user}
                            onChange={(e)=>setUser(e.target.value) }>
                            {
                              users.map(usr=> {
                                return <option 
                                  key={usr}
                                  value={usr}>{usr}
                                  </option>;
                              })
                            }
                  </select>
              </div>
              <div className="form-group"> 
                  <label className="m-2">Description: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Duration (in minutes): </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={duration}
                      onChange={(e)=>setDuration(e.target.value)}
                      />
              </div>
              <div className="form-group">
                     <label className="m-2">Date: </label>
                  <div>
                    <DatePicker
                      selected={date}
                      onChange={(dat)=>setDate(dat)}
                    />
                  </div>
              </div>
           <div className="form-group mt-5">
                <input type="submit" value="Update Exercise" className="btn btn-secondary" />
           </div>        
          
          </form>
        </div>
        </div>
    )
}
export default EditExercise;