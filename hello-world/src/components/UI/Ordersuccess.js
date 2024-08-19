import Modal from "./Modal"
import OrderSuccessPic from "../../assests/icons/order_success.svg"
const Ordersuccess=({onClose})=>{
    return (
        <Modal onClose={onClose}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src={OrderSuccessPic} alt="Success" className="img-fluid"/>
                    <div className="message">
                        <h1>Order successfully Placed.</h1>
                    </div>
                </div>

            </div>
        </Modal>

    )
}
export default Ordersuccess