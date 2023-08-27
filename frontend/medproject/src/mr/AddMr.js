import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link, useNavigate } from "react-router-dom";
import { addMR } from "../api-helpers/helpers";

const AddMr = () => {
  const id = localStorage.getItem("userId");
  const [inputs, setInputs] = useState({
    name: "",
    location: "",
    joiningDate: "",
    employee: "",
    password: "",
  });
  const navigate= useNavigate();
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    addMR(inputs)
      .then((res) => {
        console.log(res);
        navigate(`/mr/admins/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      width="100%"
      height="100%"
      paddingTop={3}
    >
      {
        <Button
          LinkComponent={Link}
          to={`/mr/admins/${id}`}
          variant="contained"
          style={{
            color: "white",
            width: "20%",

            margin: "auto",

            background: "#7ec4cf",
          }}
        >
          Show MR List
        </Button>
      }
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          variant="h4"
          fontFamily={"dancing script"}
          color={"#116A7B"}
        >
          MR Details
        </Typography>
        <AccountBoxIcon sx={{ paddingLeft: 1, paddingTop: 1 }} />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          padding={4}
          display="flex"
          margin="auto"
          width="50%"
          flexDirection={"column"}
          sx={{ border: 2, borderColor: "#bde0fe" }}
        >
          <FormLabel sx={{ color: "#116A7B", marginTop: 0 }}>Name</FormLabel>
          <TextField
            sx={{ input: { color: "#116A7B" } }}
            onChange={handleChange}
            name="name"
            value={inputs.name}
            margin="normal"
          />
          <FormLabel sx={{ color: "#116A7B", marginTop: 2 }}>
            Location Alloted
          </FormLabel>
          <TextField
            onChange={handleChange}
            name="location"
            value={inputs.location}
            margin="normal"
          />

          <FormLabel sx={{ color: "#116A7B", marginTop: 2 }}>
            Joining Date
          </FormLabel>
          <TextField
            type="date"
            onChange={handleChange}
            name="joiningDate"
            value={inputs.joiningDate}
            margin="normal"
          />
          <FormLabel sx={{ color: "#116A7B", marginTop: 2 }}>
            Employee ID
          </FormLabel>
          <TextField
            onChange={handleChange}
            name="employee"
            value={inputs.employee}
            margin="normal"
          />
          <FormLabel sx={{ color: "#116A7B", marginTop: 2 }}>
            Password
          </FormLabel>
          <TextField
            onChange={handleChange}
            name="password"
            value={inputs.password}
            margin="normal"
          />
          <Button
            type="submit"
            sx={{
              width: "50%",
              margin: "auto",
              mt: 2,
              // color: "white",
              backgroundColor: "#bde0fi",
            }}
            variant="contained"
          >
            Add MR
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddMr;
