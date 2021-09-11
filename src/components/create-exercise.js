import React,{useState, useEffect} from 'react';
import {addExercise }from '../services/Exercise.js'
import {getAllUsers }from '../services/User.js'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const CreateExercise = () => {
    const [description,setDescription] = useState('');
    const [duration,setDuration] = useState('');
    const [date,setDate] = useState(new Date());
    const [user,setUser] = useState('');
      const [users,setUsers] = useState([]);

      useEffect(()=>{
        // const usr1="LucySmith";
        // const usr2="AdamDoe";
        // setUser(usr1);
        let usrs=[];
        // usrs.push(usr1);
        // usrs.push(usr2);
       
        getAllUsers().then(res =>{
                res.data.map( u=>usrs.push(u.username))
                setUsers(usrs);
                setUser(usrs[0]);
           }).catch();
      },[])
    return (
        <div className="container p-2">
          <h3>Create a new Exercise</h3>
          <form onSubmit={(e)=>{e.preventDefault();
                                    console.log(user)
                                    const exercise = {
                                                   
                                                    username: user,
                                                    description: description,
                                                    duration: duration,
                                                    date:date
                                                  }

                                                  console.log(exercise);

                                                  addExercise(exercise)
                                                    .then(res => console.log(res.data)).catch();
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
              {/* <div className="form-group">
                  <label>Date (ex 2021-11-20T11:30:00.000Z): </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={date}
                      onChange={(e)=>setDate(e.target.value)}
                      />
              </div> */}
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
                <input type="submit" value="Create Exercise" className="btn btn-secondary" />
           </div>        
          
          </form>
        </div>
    )
};

