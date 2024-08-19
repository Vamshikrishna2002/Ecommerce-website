import AddToCartIcon from "../../../assests/icons/add_cart.svg";
import { useState } from "react";
import Modal from "../../UI/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const ListItem=({data,onAdd,onDel})=>{
// const ListItem=({data})=>{
    // const [number,new_num]=useState(0)
    const [modal,setmodal]=useState(false)
    const item=useSelector(state=>state.cart.items.find(item=>item.id===data.id))
    const dispatch=useDispatch()
    const minus=()=>{
        
        dispatch({
            type:"DEL_ITEM",
            payload:{
                id:data.id
            }
        })  
           
        // onDel(data.id)
        
        // new_num(number-1)
        
    }
    const plus=()=>{
        dispatch({
            type:"ADD_ITEM",
            payload:{
                item:data
            }
        })
        
        
        // onAdd(data.id)
        // new_num(number+1)
    }
    const handleModal=()=>{
        setmodal(previousState=>!previousState)
    }
    
    
    return (
        <>
        <div onClick={handleModal} className={"item-card"}>
            <img className={"img-fluid"} src={`/assests/${data.thumbnail}`} alt="item" />
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>{data.discountedPrice} Rs</span>
                    <small>
                        <strike>{data.price}</strike>
                    </small> 
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            {
                !item || item?.quantity<1 ? 
                    <button className="cart-add" onClick={plus}>
                        <span>Add to Cart</span>
                        <img src={AddToCartIcon} alt="Cart Icon"/>
                    </button>
                :
                    <div className={"cart-addon"}>
                        <button onClick={minus}>
                            <span>-</span>
                        </button>
                        <span>
                            {item.quantity}
                        </span>
                        <button onClick={plus}>
                            <span>+</span>
                        </button>
                    </div>
                
            }
            
        </div>
        {modal && 
            <Modal onClose={handleModal}>
                <div className={"item-card__modal"}>
                    <div className={"img-wrap"}>
                        <img className={"img-fluid"} src={`/assests/${data.thumbnail}`} alt="item" />
                    </div>
                    <div className={"meta"}>
                        <h3>{data.title}</h3>
                        <div className={"pricing"}>
                            <span>{data.discountedPrice}</span>
                            <small>
                                <strike>{data.price}</strike>
                            </small>
                        </div>
                        <p>{data.description}</p>
                        {
                        !item || item?.quantity<1 ? 
                        <button className="cart-add" onClick={plus}>
                            <span>Add to Cart</span>
                            <img src={AddToCartIcon} alt="Cart Icon"/>
                        </button>
                        :
                        <div className={"cart-addon"}>
                            <button onClick={minus}>
                                <span>-</span>
                            </button>
                            <span>
                                {item.quantity}
                            </span>
                            <button onClick={plus}>
                                <span>+</span>
                            </button>
                        </div>
                        }
                    </div>
                    

                </div>
            </Modal>
        }
        </>
        
    
    )
}
export default ListItem;
