import { Fragment,useState } from "react"
import Modal from "../UI/Modal"
import CartItems from "./CartItems"
import Ordersuccess from "../UI/Ordersuccess"
import { useDispatch, useSelector } from "react-redux"
import { addItemhandler,removeItemhandler,clearCarthandler } from "../Actions/Action"
import { useNavigate } from "react-router-dom"
const Cart=()=>{
    const [showmodal,setshowmodal]=useState(false)
    const [ordermodal,setordermodal]=useState(false)
    const items=useSelector(state=>state.cart.items)
    const totalAmount=useSelector(state=>state.cart.totalAmount)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleshowmodal=()=>{
        setshowmodal(previousState=>!previousState)
    }
    const handleordermodal=()=>{
        // handleshowmodal()
        if (localStorage.getItem("token")){
            dispatch(clearCarthandler())
            setordermodal(previousState=>!previousState)
        }
        else{
            alert("Please Login")
            dispatch(clearCarthandler())
            setshowmodal(previousState=>!previousState)
            navigate("/login")
        }
    }
    const dispatchEvents=(item,type)=>{
        if (type===1){
            dispatch(addItemhandler(item))
        }
        else{
            dispatch(removeItemhandler(item.id))
        }
    }
    return(
        <Fragment>
            
            <button onClick={handleshowmodal}>
                <span data-items={items.length}>Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>
            {
                showmodal && 
                <Modal onClose={handleshowmodal}>
                    <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                            {
                                items.length>0 ?
                                items.map(item => {
                                    return (
                                        <CartItems
                                            data={item}
                                            key={item.id}
                                            onEmitIncreaseItem={item=>dispatchEvents(item,1)}
                                            onEmitDecreaseItem={item=>dispatchEvents(item,-1)}
                                        />
                                    )
                                })
                                :
                                <div className="empty-cart">
                                    Please add something in the cart.
                                </div>
                            }
                        </div>
                        {
                         
                            items.length > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount: </h4>
                                    <h4>
                                        {totalAmount}
                                    </h4>
                                    
                                </div>
                                <button onClick={handleordermodal}>Order Now</button>
                            </div>
                        }
                    </div>
  
                </Modal>
            }
            {
                ordermodal && <Ordersuccess onClose={handleordermodal}/>
            }
            
        </Fragment>
    )
}
export default Cart