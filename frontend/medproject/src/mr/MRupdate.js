import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { MRUpdates, getMRDetails,  } from "../api-helpers/helpers";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";

const MRupdate = () => {
  const [mr, setMr] = useState();
  const [inputs, setInputs] = useState({
    name: "",
    location: "",
    joiningDate: "",
    employee: "",
    password:"",
   
  });
  const user= localStorage.getItem("userId")
  const id = useParams().id;
  const navigate= useNavigate();
  console.log(id);
  useEffect(() => {
    getMRDetails(id)
    // .then((data) => console.log("qwerty", data))
      .then((data) => {
        console.log("qwerty", data);
      if ( data.mr){
        setMr(data.mr);
        setInputs({
          name: data.mr.name,
          location: data.mr.location,
          joiningDate: data.mr.joiningDate,
          employee: data.mr.employee,
          password: data.mr.password,
         
        });}
        else{
          console.log("else part")
        }
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
    MRUpdates(inputs, id)
      .then((data) => {
        console.log(data);
        navigate(`/mr/admins/${user}`)
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
          to={`/mr/admins/${user}`}
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
        {/* <AccountBoxIcon sx={{ paddingLeft: 1, paddingTop: 1 }} /> */}
      </Box>
      {mr && (
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
            // LinkComponent={Link}
            // to={`/mr/admins/${user}`}
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
      )}
    </Box>
  );
};

export default MRupdate;
