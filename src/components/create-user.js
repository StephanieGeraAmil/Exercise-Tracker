import React,{useState} from 'react'
import {addUser }from '../services/User.js'

const CreateUser = () => {
    const [username,setUserName] = useState('');
   
   return (
        <div className="container p-2">
          <h3>Create a new User</h3>
          <form onSubmit={(e)=>{e.preventDefault();
                                    console.log(username)
                                    const user = {
                                                    username: username 
                                                  }

                                                  console.log(username);

                                                  addUser(user)
                                                    .then(res => console.log(res.data)).catch();
                                    }}>
             
              <div className="form-group"> 
                  <label className="m-2">Username: </label>
                  <input  type="text"
                      required
                      className="form-control d-flex ml-auto"
                      value={username}
                      onChange={(e)=>setUserName(e.target.value)}
                      />
              </div>
               
           <div className="form-group mt-5">
                <input type="submit" value="Create User" className="btn btn-secondary" />
           </div>        
          
          </form>
        </div>
    )
};


export default CreateUser;
