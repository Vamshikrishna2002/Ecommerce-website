// import axios from "axios"
// export const Signup=(details,callback)=>{
//     return async(dispatch)=>{
//         try{
//             const response=axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkpNIzPiEG9kUKKEJyIZIDYQU3h9fCmNQ',{
//                 email:details.email,
//                 password:details.password,
//                 returnSecureToken:true
//             })
//             dispatch({
//                 type:'SIGNUP',
//                 payload:response.data
//             })
//             return callback(response.data)
//         }
//         catch(error){
//             console.log(error.response)
//             return callback({
//                 error:true,
//                 response:error.response
//             })
//         }
        
         
//     }
//     }
    
// export const Signin=(details)=>{
//     return async(dispatch)=>{
//         try{
//             const response=axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkpNIzPiEG9kUKKEJyIZIDYQU3h9fCmNQ',{
//                 email:details.email,
//                 password:details.password,
//                 returnSecureToken:true
//             })
//             dispatch({
//                 type:'LOGIN',
//                 payload:response.data
//             })
//         }
//         catch(error){
//             console.log(error.response)
//         }
         
//     }
//     }
    
    