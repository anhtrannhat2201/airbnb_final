import React from "react";
import { Box, Container } from "@mui/material";
import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import ProfileSetting from "./ProfileSetting";

export default function Header() {
  return (
    <Box
      sx={{
        minHeight: 70,
        borderBottom: "1px solid #ddd",
        display: "flex",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: 70,
            px: 4,
          }}
        >
          <Logo />
          <LocationSearch />
          <ProfileSetting />
        </Box>
      </Container>
    </Box>
  );
}
