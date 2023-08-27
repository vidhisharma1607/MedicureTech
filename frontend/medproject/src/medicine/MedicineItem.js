import React, { useEffect, useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Collapse,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { addCartItem, getProductById, medicineDelete } from "../api-helpers/helpers";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  // transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MedicineItem = ({
  name,
  salts,
  company,
  description,
  expiryDate,
  credPoints,
  price,
  id,
  user,
}) => {
  const isLoggedInAdmin = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };
// const [products, setProducts]= useState([]);
//   const [cartitem, setcartItems]= useState("");
  
  // const [medicine, setMedicine] = useState();
  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    price: "",
    quantity:1,
  });

  
  const handleCart= (id) => {
    console.log(id);
      getProductById(id)
        .then((data) => {
          setInputs({
            name: data.product.name,
            company: data.product.company,
            price: data.product.price,
            quantity:1
            
          });
        })
        .catch((err) => console.log(err));

        

  }
 useEffect(() => {
  console.log(inputs);
}, [inputs]);

        addCartItem(inputs).then((res)=>{
          console.log(res);
        });
  
 
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDelete = () => {
    medicineDelete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    // window.location.reload();
    setOpen(true);
  };
  return (
    <Card
      sx={{
        width: "50%",
        height: "auto",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        border: "2px solid #daeaf6",
      }}
    >
      <Box
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
          {credPoints}
        </Avatar>
      </Box>
      <Chip
        label={`${company}`}
        size="small"
        variant="outlined"
        sx={{
          height: "auto",
          width: "20%",
          background: "#daeaf6",
          "& .MuiChip-label": {
            display: "block",
            whiteSpace: "normal",
          },
        }}
      />

      <CardContent
        sx={{ p: 1, pt: 0, "&:last-child": { pt: 0 } }}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography
          sx={{ fontSize: "16px" }}
          variant="h6"
          color="text.secondary"
        >
          Salts: {salts}
        </Typography>
        <Typography
          sx={{ fontSize: "15px", marginTop: "25px" }}
          variant="body"
          color="text.secondary"
        >
          Expiry Date : {expiryDate}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "15px", marginTop: "15px" }}
          color="text.secondary"
        >
          Amount: Rs. {price}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests
        </Typography> */}
      </CardContent>

      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <Typography>Description</Typography>
        <ExpandMoreIcon />
      </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Description</Typography> */}
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
      {isLoggedInAdmin() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton
            LinkComponent={Link}
            to={`/medicines/${id}`}
            sx={{ color: "#7ec4cf" }}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete} sx={{ color: "#7ec4cf" }}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
      <Button onClick={()=>handleCart(id)}>Add</Button>
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
          Medicine has been deleted
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default MedicineItem;
