import React, { useEffect, useState } from "react";
import MRItem from "./MRItem";
import { Box } from "@mui/material";
// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMRbyAdmin } from "../api-helpers/helpers";
import { useParams } from "react-router-dom";

const MR = () => {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [mrList, setMRList] = useState();
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    getMRbyAdmin(id)
      .then((data) => setMRList(data.mr))
      .catch((err) => console.log(err));
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
      {mrList &&
        mrList.map((item, index) => (
          <MRItem
            name={item.name}
            location={item.location}
            joiningDate={new Date(`${item.joiningDate}`).toLocaleDateString()}
            employee={item.employee}
            id={item._id}
            key={index}
            user={item.user}
          />
        ))}
      {/* <MRItem name={"khuch"} /> */}
    </Box>
  );
};

export default MR;
