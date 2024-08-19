export const addItemhandler=item=>{
    return dispatch=>{
        dispatch({
            type:"ADD_ITEM",
            payload:{
                item:item
            }
        })
    }
}
export const removeItemhandler=id=>{
    return dispatch=>{
        dispatch({
            type:"DEL_ITEM",
            payload:{
                id:id
            }
        })
    }
}
export const clearCarthandler=()=>{
    return dispatch=>{
        dispatch({
            type:"CLEAR_CART"
        })
    }
}
