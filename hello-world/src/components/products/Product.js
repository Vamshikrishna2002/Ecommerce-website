import ListItem from "./ListItems/ListItem"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "../UI/Loader"
import { useParams,useNavigate } from "react-router-dom"

// const Product=({onAddItem,onDelItem,eventState})=>{
const Product=()=>{
    const [items,changeitems]=useState([])
    const [loader,setloader]=useState(true)
    const [presentItems,setpresentItems]=useState([])
    const params=useParams()
    const history=useNavigate()
    // useEffect(()=>{
    //     fetch("https://ecommerce-website-77dea-default-rtdb.firebaseio.com/items.json")
    //     .then(response=>response.json())
    //     .then(data=>console.log(data))
    //     .catch(error=>console.log(error))
    // },[])

    useEffect(()=>{
        let slug='items.json'
        if (params.category){
            slug=`items-${params.category}.json`

        }
        axios.get(`https://ecommerce-website-77dea-default-rtdb.firebaseio.com/${slug}`)
        .then(response=>{
            const data=response.data
            if (!data){
                handleNotfound()
                return;

            }
            const transformeddata=data.map((item,index)=>{
                return {
                    ...item,
                    id: index
                }
            })
            changeitems(transformeddata)
            setloader(false)
        })
        .catch(error=>{
            alert("some error occured.")
            setloader(false)
        })
        return ()=>{
            changeitems([])
            setloader(true)
        }
    },[params])

    const handleNotfound=()=>{
        history("/404")
    }

    // useEffect(()=>{
    //     if(eventState.id>-1){
    //         if(eventState.type===1){
    //             handleAdd(eventState.id)
    //         }
    //         if(eventState.type===-1){
    //             handleDel(eventState.id)
    //         }
    //     }

    // },[eventState])

    // const handleAdd=(id)=>{
    //     let data=[...items]
    //     let index=data.findIndex(i=>i.id===id)
    //     // if(presentItems.indexOf(id)>-1){
    //     //     return;
    //     // }
    //     data[index].quantity+=1
    //     changeitems([...data])
    //     onAddItem(data[index]);
    // }
    // const handleDel=(id)=>{
    //     // let index=presentItems.indexOf(id)
    //     // if(index>-1){
    //     //     let things=[...presentItems]
    //     //     things.splice(index,1)
    //     //     setpresentItems([...things])
    //     //     onDelItem();
    //     // }
    //     let data=[...items]
    //     let index=data.findIndex(i=>i.id===id)
    //     if (data[index].quantity!==0){
    //         data[index].quantity-=1
    //         // onDelItem(data[index])
    //         changeitems([...data])
    //         onDelItem(data[index])
    //     }
    // }
    

    return (
        <>
        <div className={"product-list"}>
            
            <div className={"product-list--wrapper"}>
                {
                    items.map(item=>{
                        // return (<ListItem key={item.id} data={item} onAdd={handleAdd} onDel={handleDel}/>)
                        return (<ListItem key={item.id} data={item}/>)
                    })
                }
            </div>
        </div>
        {loader && <Loader/>}
        </>
    )
}
export default Product