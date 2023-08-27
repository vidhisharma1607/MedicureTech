import React, { useEffect, useState } from "react";
// import MRItem from "./MRItem";
import { Box } from "@mui/material";
// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { getMRbyAdmin } from "../api-helpers/helpers";
import { useParams } from "react-router-dom";
import { getProductbyUser } from "../api-helpers/helpers";
import CartProduct from "./CartProduct";

const CartProductDisplay = () => {
const [productList, setProductList] = useState();
const id= useParams().id;
console.log(id);
useEffect(()=>{
    getProductbyUser(id).then((data)=> setProductList(data.item)).catch((err)=>console.log(err));
}, [id]);

  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      flexDirection={"row"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
      sx={{ margin: "auto" }}
      width={"75%"}
    >
      {productList &&
        productList.map((item, index) => (
            // <h2>something</h2>
          <CartProduct
            name={item.name}
            company={item.company}
            price={item.joiningDate}
            user={item.user}
            id={item._id}
            key={index}
            quantity={item.quantity}
          />
        ))}
      {/* <MRItem name={"khuch"} /> */}
    </Box>
  );
};
  
export default CartProductDisplay