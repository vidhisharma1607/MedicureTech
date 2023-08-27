import { Box, FormLabel, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { sendAuthRequestShopkeeper } from "../api-helpers/helpers";
import { authActions } from "../store";
import { useDispatch } from "react-redux";

const ShopkeeperAuth = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isSignUP, setIsSignUp] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputState);

    if (isSignUP) {
      sendAuthRequestShopkeeper(true, inputState)
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => {
          dispatch(authActions.login());
        })
        .catch((err) => console.log(err));
    } else {
      sendAuthRequestShopkeeper(false, inputState)
        .then((data) => localStorage.setItem("userId", data.id))
        .then(() => {
          dispatch(authActions.login());
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box
      width="40"
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography variant="h4" textAlign="center">
            {isSignUP ? "SignUp" : "Login"}
          </Typography>

          {isSignUP && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputState.name}
                name="name"
                margin="normal"
              />
            </>
          )}

          <FormLabel>email</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputState.email}
            name="email"
            margin="normal"
          />

          <FormLabel>Password</FormLabel>
          <TextField
            value={inputState.password}
            name="password"
            margin="normal"
            type="password"
            onChange={handleChange}
          />
          <Button sx={{ mt: 2 }} type="submit" variant="contained">
            {isSignUP ? "SignUp" : "Login"}
          </Button>
          <Button
            onClick={() => setIsSignUp(!isSignUP)}
            sx={{ mt: 2 }}
            variant="outlined"
          >
            Change to {isSignUP ? "Login" : "SignUp"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ShopkeeperAuth;
