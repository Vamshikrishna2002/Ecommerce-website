import { useNavigate } from "react-router-dom"
import Cart from "../cart/Cart"
import SearchBox from "../UI/Search"
import { useEffect, useState } from "react"
import axios from "axios"
// const Header=({count,items,onhandleEvent})=>{
const Header=()=>{
    const [login,setlogin]=useState(false)
    const navigate=useNavigate()
    const handleLogin=()=>{
        navigate("/login")
        if (localStorage.getItem("token")){
            setlogin(true)
        }
    }
    const handleLogout=()=>{
        localStorage.removeItem("token")
        setlogin(false)
        navigate("/login")
    }
    
    useEffect(()=>{
        try{
            let token=localStorage.getItem("token")
            console.log(token)
            if (!token){
                return
            }
            const response=axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDkpNIzPiEG9kUKKEJyIZIDYQU3h9fCmNQ',{
                idToken: token
            })
            console.log(response)
            if (response.status===400){
                console.log("some error occured")
            }
            setlogin(true)
            
        }
        catch(error){
            console.log(error.response)
        }
    },[])
    
    return (
        <header>
            <div className={"nav-brand"}>
                <a to="/">
                    <span>Vamshi Kart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30"
                        height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                </a>
            </div>
            <div className={"searchBox-container"}>
                <SearchBox/>
                {/* <form>
                    <input name="search" type="text"
                        id="search" placeholder="Enter product name, category" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                            height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                    height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg> */}
            </div>
            {login?<>
                <button className="login-btn">User</button>
                <button className="login-btn" onClick={handleLogout}>Logout</button>
            </>:
            <button className="login-btn" onClick={handleLogin}>Login</button>
            }
            
            <div className={"cart-container"}>
                {/* <Cart count={count} items={items} onHandleEvent={onhandleEvent}/> */}
                <Cart/>
            </div>
    </header>
    )
}
export default Header