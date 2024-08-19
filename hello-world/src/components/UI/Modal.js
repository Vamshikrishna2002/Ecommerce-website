import ReactDom from "react-dom"
import { Backdrop } from "./Loader"
const Modal=({onClose,children})=>{
    return (ReactDom.createPortal(
        <>
            <Backdrop onClose={onClose}/>
            <div className={"modal"}>
                <button type="close" onClick={onClose}>x</button>
                <div>{children}</div>
            </div>
        </>,
        document.getElementById("modal-root"))
    )
}
export default Modal