// import React from "react";
import { Box, FormLabel, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { sendAuthRequest } from "../api-helpers/helpers";
import { authActions } from "../store";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
const AdminAuth = () => {
  const [inputState, setInputState] = useState({
    licence: "",
    company: "",
    password: "",
  });

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isSignUP, setIsSignUp] = useState(false);
  // const onResRecieved = (data) => {
  //   if (isSignUP) {
  //     localStorage.setItem("userId", data.user._id);
  //   } else {
  //     localStorage.setItem("userId", data.id);
  //   }
  //   // dispatch(authActions.login());
  //   // navigate("/medicines");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputState);

    if (isSignUP) {
      sendAuthRequest(true, inputState)
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => {
          dispatch(authActions.login());
        })
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputState)
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
    <Box margin="auto" marginTop={10}>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          width="35%"
          padding={2}
          margin="auto"
        >
          <Typography variant="h4" textAlign="center" marginBottom={3}>
            {isSignUP ? "SignUp" : "Login"}
          </Typography>

          <FormLabel>Licence No</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputState.licence}
            name="licence"
            margin="normal"
          />

          {isSignUP && (
            <>
              <FormLabel>company</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputState.company}
                name="company"
                margin="normal"
              />
            </>
          )}
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

export default AdminAuth;
