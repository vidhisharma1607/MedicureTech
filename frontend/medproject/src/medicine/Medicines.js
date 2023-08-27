import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import MedicineItem from "./MedicineItem";
import { getAllMedicines } from "../api-helpers/helpers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Medicines = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [medicines, setMedicines] = useState();
  useEffect(() => {
    getAllMedicines()
      .then((data) => setMedicines(data?.medicines))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      display="flex"
      flexWrap={"wrap"}
      flexDirection="column"
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {isLoggedIn && (
        <Button
          LinkComponent={Link}
          to="/add-medicine/"
          variant="contained"
          style={{ color: "white", background: "#7ec4cf" }}
        >
          + Add Medicine
        </Button>
      )}
      {medicines &&
        medicines.map((item, index) => (
          <MedicineItem
            name={item.name}
            salts={item.salts}
            company={item.company}
            description={item.description}
            expiryDate={new Date(`${item.expiryDate}`).toLocaleDateString()}
            credPoints={item.credPoints}
            price={item.price}
            id={item._id}
            key={index}
            user={item.user}
          />
        ))}
      {/* <MedicineItem />
      <MedicineItem /> */}
    </Box>
  );
};

export default Medicines;
