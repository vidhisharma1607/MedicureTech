import React, { useState } from 'react'

const AddToCart = () => {
    const id= localStorage.getItem("userId");
    const [cartItems, setcartItems]= useState([]);
    const handleCartItem = (productDetails)=>{
        setcartItems([...cartItems, productDetails]);
    }
    // const [input, setInputs]=useState({
    //     name:"",
    //     company:"",
    //     price:"",
    //     quanitity:"",
       
    // })
    // const 
  return (
    <div>AddToCart</div>
  )
}

export default AddToCart