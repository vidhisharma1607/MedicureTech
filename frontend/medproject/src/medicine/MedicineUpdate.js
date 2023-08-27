import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMedicineDetails, medicineUpdate } from "../api-helpers/helpers";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";

const MedicineUpdate = () => {
  const [medicine, setMedicine] = useState();
  const [inputs, setInputs] = useState({
    name: "",
    salts: "",
    company: "",
    description: "",
    expiryDate: "",
    credPoints: "",
    price: "",
  });
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    getMedicineDetails(id)
      .then((data) => {
        setMedicine(data.medicine);
        setInputs({
          name: data.medicine.name,
          salts: data.medicine.salts,
          company: data.medicine.company,
          description: data.medicine.description,
          expiryDate: data.medicine.expiryDate,
          credPoints: data.medicine.credPoints,
          price: data.medicine.price,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    medicineUpdate(inputs, id)
      .then((data) => {
        console.log(data);
        // navigate("/diaries");
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
      {medicine && (
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
            <FormLabel sx={{ color: "#116A7B", marginTop: 1 }}>
              Company
            </FormLabel>
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
              sx={{ width: "50%", margin: "auto", mt: 2, color: "#bde0fe" }}
              variant="contained"
            >
              Add Medicine
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default MedicineUpdate;
