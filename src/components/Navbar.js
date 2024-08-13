// src/components/Navbar.js

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import { Menu, Search, Person, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <Menu />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
            Logo
          </Link>
        </Typography>
        <IconButton color="inherit" component={Link} to="/instore">
          <Typography variant="button">In Store</Typography>
        </IconButton>
        <div style={{ position: "relative", marginRight: "10px" }}>
          <InputBase
            placeholder="Search…"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              padding: "5px",
            }}
          />
          <Search style={{ position: "absolute", right: "5px", top: "5px" }} />
        </div>
        <IconButton color="inherit" component={Link} to="/profile">
          <Person />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
