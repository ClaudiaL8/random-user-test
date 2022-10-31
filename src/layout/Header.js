import React from "react";
import { Box, Typography, CardMedia, Container } from "@mui/material";
import logo from "../images/logo-web.png";

const Header = () => {
  const image = {
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const imageWrapper = {
    overflow: "hidden",
    paddingBottom: "90%",
    width: "100%",
    maxHeight: "146.63px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: "13px",
          paddingBottom: "13px",
          color: "#666666",
        }}
      >
        <Box style={{ imageWrapper }}>
          <CardMedia
            component="img"
            image={logo}
            alt={"Tappx logo"}
            sx={{ maxHeight: "43px", maxWidth: "none" }}
            style={{ image }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            paddingTop: "5px",
            marginLeft: 10,
          }}
        >
          Random User
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
