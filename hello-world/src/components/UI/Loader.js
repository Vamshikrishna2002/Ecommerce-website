import ReactDom from "react-dom"
export const Backdrop=props=>{
    const handleClick=()=>{
        if (props.onClose){
            props.onClose();
        }
    }
    return(
    <div onClick={handleClick} className={"loader-overlay"}></div>
    )
}
const Loader=()=>{
    return (
        ReactDom.createPortal(<>
            <Backdrop/>
            <div className={"loading-dots"}>
                <div><h3>loading</h3></div>
                <div className={"loading-dots--dot"}></div>
                <div className={"loading-dots--dot"}></div>
                <div className={"loading-dots--dot"}></div>
            </div>
        </>,document.getElementById('loader-root'))
    )

}
export default Loader