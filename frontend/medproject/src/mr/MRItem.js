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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {mrDelete}  from "../api-helpers/helpers";

const MRItem = ({ name, location, joiningDate, employee, user,id }) => {
  const isLoggedInAdmin = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    console.log(id)
    mrDelete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    // window.location.reload();
    setOpen(true);
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
      {/* <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <CardHeader
          titleTypographyProps={{
            fontSize: 20,
          }}
          sx={{ p: 1, "&:last-child": { pb: 0 } }}
          action={<IconButton aria-label="settings"></IconButton>}
          title={name}
        />

        <Avatar
          sx={{
            width: 25,
            height: 25,
            marginLeft: "auto",
            marginTop: 1,
            color: "black",
            fontSize: 9,
            background: "#daeaf6",
          }}
        >
          {location}
        </Avatar>
      </Box> */}
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
            EmployeID : {employee}
          </Typography>
          <Typography
            sx={{ margin: "auto" }}
            gutterBottom
            variant="body2"
            align="center"
            component="div"
            color="text.secondary"
          >
            Location : {location}
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary">
            {joiningDate}
          </Typography>
          {isLoggedInAdmin() && (
            <CardActions
            
              sx={{
                marginTop: "5px",
                marginBottom: "0px",
                  
                marginLeft: "auto",
              }}
            >
              <IconButton
                //   LinkComponent={Link}
                //   to={`/medicines/${id}`}
                LinkComponent={Link}
            to={`/mr/${id}`}
                width={"20%"}
                sx={{ color: "#7ec4cf", marginLeft: "auto" }}
              >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton  onClick={handleDelete}  sx={{ color: "#7ec4cf", margin: "auto" }}>
                <DeleteIcon fontSize="small" />
              </IconButton>
              
            </CardActions>
            
          )}
        </CardContent>
      </CardActionArea>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          MR has been deleted
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default MRItem;
