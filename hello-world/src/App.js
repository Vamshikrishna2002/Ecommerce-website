import { useState } from "react";
import Product from "./components/products/Product";
import Header from "./components/Layout/header";
import Subheader from "./components/Layout/Subheader";
import { Route,Routes } from "react-router-dom";
import AuthIndex from "./components/Auth/Index";
function App() {
  
  // const [cartItems,setcartItems]=useState([])
  // const [eventQueue,seteventQueue]=useState({
  //   id:"",
  //   type:""
  // })
  // const handleAddItem=(item)=>{
  //   let items=[...cartItems]
  //   let index=items.findIndex(i=>i.id===item.id)
  //   if (index>-1){
  //     items[index]=item
  //     return;
  //   }
  //   else{
  //     items.push(item)
  //   }
    
  //   setcartItems([...items])
    
  // }
  // const handleRemoveItem=(item)=>{
  //   let items=[...cartItems]
  //   let index=items.findIndex(i=>i.id===item.id)
  //   if (items[index].quantity===0){
  //     items.splice(index,1)
  //   }
  //   else{
  //     items[index]=item
  //   }
    
  //   setcartItems([...items])
    
  // }
  // const handleEventQueue=(id,type)=>{
  //   seteventQueue({id,type})
  // }
  
  
  // if (token){
  //   checkLog(true)
  // }

  return (
    <div >
      {/* <Header count={cartItems.length} items={cartItems} onhandleEvent={handleEventQueue}/> */}
      <Header />
      <Subheader/>
      <Routes>
        
        
        <Route path="/login" element={<AuthIndex type="login" />}/>
        <Route path="/signup" element={<AuthIndex type="signup"/>}/>
          
        
        <Route path="/404" element={<h1>Not Found.</h1>}/>
        <Route path="/:category?" element={<Product/>}/>
        <Route to="/404"/>
      </Routes>
      {/* <Product onAddItem={handleAddItem} onDelItem={handleRemoveItem} eventState={eventQueue}/> */}

    </div>
  );
}

export default App;
