import http from '../http-common.js'


     export const getAllExercises= (page=0)=>{
        
            return http.get(`/exercises/?page=${page}`);
        }
    export const getExercise= (id)=>{
   
        
            return http.get(`/exercises/${id}`);
        }

    export const addExercise= (exercise)=>{
        
            return http.post(`/exercises/add/`,exercise);
        }

    export const deleteExercise= (id)=>{
          
            return http.delete(`/exercises/delete/${id}`);
        }
    export const updateExercise= (exercise)=>{
  
            return http.put(`/exercises/update/${exercise._id}`, exercise);
        }

