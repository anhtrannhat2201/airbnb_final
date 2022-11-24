import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
    </Box>
  );
}
