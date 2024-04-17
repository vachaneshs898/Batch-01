import React from "react";
import Box from "../UI/Box";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import Nav from "../UI/Nav";
import Typography from "../UI/Typography";
import UserImg from "../UI/UserImg";
import "./index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <Logo>App</Logo>
      <Box className="inline-flex" style={{ gap: "10px" }}>
        <UserImg
          src={
            "https://w7.pngwing.com/pngs/439/19/png-transparent-avatar-user-profile-icon-women-wear-frock-face-holidays-women-accessories.png"
          }
          size="medium"
        />
        <Typography type="title">Current User</Typography>
        <Button>
          <Link to="/about">About Us</Link>
        </Button>
      </Box>
    </Nav>
  );
}

export default Header;
