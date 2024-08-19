import axios from "axios"
import { useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import Loader from "../UI/Loader"
import { useDispatch } from "react-redux"
import { Signup } from "../Actions/auth"

const AuthIndex=({type,login,checkLogin})=>{
    const [loader,setloader]=useState(false)
    const [details,setDetails]=useState({
        email:"",
        password:""
    })
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleInput=e=>{
        
        setDetails({
            ...details,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=e=>{
        e.preventDefault();
        if (type==="signup"){
            setloader(true)

            Signup();
            setloader(false)
        }
        else{
            setloader(true)
            checkisloggedin();
            Signin();
            setloader(false)

        }
        
    }

    const Signup=async()=>{
        try{
            const response= await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkpNIzPiEG9kUKKEJyIZIDYQU3h9fCmNQ',{
                email:details.email,
                password:details.password,
                returnSecureToken:true
            })
            if ((await response).status===400){
                console.log("some error occured")
            }
            if ((await response).status===200){
                console.log("Successfully Signed in")
                localStorage.setItem("token",(await response).data.idToken)
                
                navigate("/")
                // checkLogin(true)
                // console.log(login)
            }
        }
        catch(error){
            console.log(error.response)
        }
    }
    

    const Signin=async()=>{
        
        try{
            const response=axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkpNIzPiEG9kUKKEJyIZIDYQU3h9fCmNQ',{
                email:details.email,
                password:details.password,
                returnSecureToken:true
            })
            // console.log((await response))
            if ((await response).status===400){
                alert("some error occured")
            }
            if ((await response).status===200){
                console.log("Successfully logged in")
                navigate("/")
                // console.log((await response).data.idToken)
                localStorage.setItem("token",(await response).data.idToken)
                

            }
        }
        catch(error){
            console.log(error.response)
        }
    }

    const checkisloggedin=async()=>{
        try{
            let token=localStorage.getItem("token")
            console.log(token)
            if (!token){
                return
            }
            const response=axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDkpNIzPiEG9kUKKEJyIZIDYQU3h9fCmNQ',{
                idToken: token
            })
            console.log((await response))
            if ((await response).status===400){
                console.log("some error occured")
            }
             
        }
        catch(error){
            console.log(error.response)
        }
    }
    
    
    
    return (
        <>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink to={"/login"}><h3>Login</h3></NavLink>
                        <NavLink to={"/signup"}><h3>Signup</h3></NavLink>
                    </div>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Enter Email" 
                                value={details.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter Password"
                                value={details.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {type==="login" ? "Login":"Signup"}
                            </button>
                        </div>
                    </form>

                </div>

            </div>
            {loader && <Loader/>}
        </>
        
    )
}
export default AuthIndex