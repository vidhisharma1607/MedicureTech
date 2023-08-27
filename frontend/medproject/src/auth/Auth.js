import React from "react";
import { Avatar, Box, Button, Card, CardActions } from "@mui/material";

import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <section sx={{ padding: 10, lineHeight: 5 }}>
      {" "}
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent="center"
        alignItems="center"
        padding="auto"
        margin="auto"
      >
        <Card sx={{ maxWidth: 450, margin: 2 }}>
          {/* <img
          height="140"
          src="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
          <Avatar sx={{ width: 50, height: 50, margin: "auto" }}></Avatar>

          <CardActions>
            <Button
              size="small"
              color="primary"
              LinkComponent={Link}
              to="/auth/admin"
            >
              Admin SignIn
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 450, margin: 0.5 }}>
          <Avatar sx={{ width: 50, height: 50, margin: "auto" }}></Avatar>

          <CardActions>
            <Button size="small" color="primary">
              MR SignIn
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 450, margin: 0.5 }}>
          <Avatar sx={{ width: 50, height: 50, margin: "auto" }}></Avatar>

          <CardActions>
            <Button size="small" color="primary">
              Doctor SignIn
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 450, margin: 0.5 }}>
          <Avatar sx={{ width: 50, height: 50, margin: "auto" }}></Avatar>

          <CardActions>
            <Button
              LinkComponent={Link}
              to="/auth/user"
              size="small"
              color="primary"
            >
              ShopKeeper SignIn
            </Button>
          </CardActions>
        </Card>
      </Box>
    </section>
  );
};

export default Auth;
