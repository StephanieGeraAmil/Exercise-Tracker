
import React ,{useState, useEffect}from 'react';
import {getAllExercises,deleteExercise }from '../services/Exercise.js'
import { Link } from 'react-router-dom';



const ExerciseList = props => {
    const [exercises,setExercises] = useState([]);
     
    const getTheData=()=>{  getAllExercises().then(
                                response=> {console.log(response.data);
                                            setExercises(response.data);
                                        }
                            ).catch();
                            }

    useEffect(()=>{
      getTheData()
    },[]);

   
    return (

         <div className="container p-2">
        <h3>Exercise List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { exercises.map(ex =>
            
                <tr key={ex._id}>
                    <td>{ex.username}</td>
                    <td>{ex.description}</td>
                    <td>{ex.duration}</td>
                    <td>{ex.date.substring(0,10)}</td>
                    <td>
                    <Link to={"/edit/"+ex._id}>edit</Link> | <a href="#" onClick={() => {deleteExercise(ex._id).then(response=> {console.log(response.data);
                                                                                                                                  getTheData();})}}>delete</a>
                    </td>
                </tr>

            
           ) }
          </tbody>
        </table>
      </div>

        
       
    )
}
export default ExerciseList;
