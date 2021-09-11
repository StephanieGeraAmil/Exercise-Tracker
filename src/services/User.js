import http from '../http-common.js'


     export const getAllUsers= (page=0)=>{
        
            return http.get(`/users/?page=${page}`);
        }

    export const addUser= (user)=>{
        
            return http.post(`/users/add/`,user);
        }

    