// import React from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import { addMedicine } from "../api-helpers/helpers";
import { Link, useNavigate } from "react-router-dom";
const AddMedicine = () => {
  const [inputs, setInputs] = useState({
    name: "",
    salts: "",
    company: "",
    description: "",
    expiryDate: "",
    credPoints: "",
    price: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    addMedicine(inputs)
      .then((res) => {
        console.log(res);
        navigate("/medicines");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          variant="h4"
          fontFamily={"dancing script"}
          color={"#116A7B"}
        >
          Add Medicine Details
        </Typography>
        <LocalPharmacyIcon sx={{ paddingLeft: 1, paddingTop: 1 }} />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          padding={4}
          display="flex"
          margin="auto"
          width="50%"
          flexDirection={"column"}
        >
          <FormLabel sx={{ color: "#116A7B", marginTop: 1 }}>Name</FormLabel>
          <TextField
            sx={{ input: { color: "#116A7B" } }}
            onChange={handleChange}
            name="name"
            value={inputs.name}
            margin="normal"
          />
          <FormLabel sx={{ color: "#116A7B", marginTop: 1 }}>Salts</FormLabel>
          <TextField
            onChange={handleChange}
            name="salts"
            value={inputs.salts}
            margin="normal"
          />
          <FormLabel sx={{ color: "#116A7B", marginTop: 1 }}>Company</FormLabel>
          <TextField
            onChange={handleChange}
            name="company"
            value={inputs.company}
            margin="normal"
          />
          <FormLabel sx={{ color: "#116A7B", marginTop: 1 }}>
            Description
          </FormLabel>
          <TextField
            onChange={handleChange}
            name="description"
            value={inputs.description}
            margin="normal"
          />
          <FormLabel sx={{ color: "#116A7B", marginTop: 1 }}>
            ExpiryDate
          </FormLabel>
          <TextField
            type="date"
            onChange={handleChange}
            name="expiryDate"
            value={inputs.expiryDate}
            margin="normal"
          />
          <FormLabel sx={{ color: "#116A7B", marginTop: 1 }}>
            CredPoints
          </FormLabel>
          <TextField
            onChange={handleChange}
            name="credPoints"
            value={inputs.credPoints}
            margin="normal"
          />
          <FormLabel sx={{ color: "#116A7B", marginTop: 1 }}>Price</FormLabel>
          <TextField
            onChange={handleChange}
            name="price"
            value={inputs.price}
            margin="normal"
          />
          <Button
            type="submit"
            sx={{
              width: "50%",
              margin: "auto",
              mt: 2,
              // color: "white",
              backgroundColor: "#bde0fe",
            }}
            variant="contained"
          >
            Add Medicine
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddMedicine;
