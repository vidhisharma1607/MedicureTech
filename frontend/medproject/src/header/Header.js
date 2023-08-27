import React from "react";
import { AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import MedicationIcon from "@mui/icons-material/Medication";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const linksArr = ["home", "medicines", "auth"];
const adminLoggedInLinks = ["home", "medicines", "add-mr"];
const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ bgcolor: "#b2e4f0", position: "sticky" }}>
        <Toolbar>
          <MedicationIcon sx={{ color: "black" }} />
          <Tabs
            value={value}
            onChange={(e, val) => {
              setValue(val);
            }}
            sx={{ ml: "auto", color: "black", textDecoration: "none" }}
          >
            {isLoggedIn
              ? adminLoggedInLinks.map((link) => (
                  <Tab
                    LinkComponent={Link}
                    to={`/${link === "home" ? "" : link}`}
                    sx={{
                      textDecoration: "none",
                      ":hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "18px",
                      },
                    }}
                    key={link}
                    label={link}
                  />
                ))
              : linksArr.map((link) => (
                  <Tab
                    LinkComponent={Link}
                    to={`/${link === "home" ? "" : link}`}
                    sx={{
                      textDecoration: "none",
                      ":hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "18px",
                      },
                    }}
                    key={link}
                    label={link}
                  />
                ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
