import {
    Alert,
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Snackbar,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";


const CartProduct = ({name, user, company, quantity, id, price}) => {
    const isLoggedInAdmin = () => {
        if (localStorage.getItem("userId") === user) {
          return true;
        }
        return false;
      };
  return (
    <Card
    sx={{
      width: 250,
      height: 230,
      m: 1,
      padding: 1,
      border: 1,
      borderColor: "#7ec4cf",
    }}
  >
     <CardActionArea>
        <Avatar
          sx={{ margin: "auto", padding: 1, background: "#7ec4cf" }}
        ></Avatar>
        <CardContent sx={{ justifyContent: "center", alignContent: "center" }}>
          <Typography
            // sx={{ justifyContent: "center", alignContent: "center" }}
            // // gutterBottom
            align="center"
            variant="h5"
            // component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{ margin: "auto", fontSize: "13px" }}
            gutterBottom
            align="center"
            variant="body2"
            component="div"
            color="text.secondary"
          >
            Price : {price}
          </Typography>
          <Typography
            sx={{ margin: "auto" }}
            gutterBottom
            variant="body2"
            align="center"
            component="div"
            color="text.secondary"
          >
            quantity : {quantity}
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary">
            {company}
          </Typography>
          {isLoggedInAdmin() && (
            <CardActions
            
              sx={{
                marginTop: "5px",
                marginBottom: "0px",
                  
                marginLeft: "auto",
              }}
            >
            
              
            </CardActions>
            
          )}
        </CardContent>
      </CardActionArea>
      </Card>
  )
}

export default CartProduct