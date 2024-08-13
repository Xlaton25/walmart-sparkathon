import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import { Menu, Search, Person, ShoppingCart } from "@mui/icons-material";

function HomePage() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <IconButton color="inherit">
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
            <Search
              style={{ position: "absolute", right: "5px", top: "5px" }}
            />
          </div>
          <IconButton color="inherit">
            <Person />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>{/* Add product listings and offers here */}</div>
    </div>
  );
}

export default HomePage;
