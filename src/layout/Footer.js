import React from "react";
import { Box, Typography, CardMedia, Container } from "@mui/material";
import logo from "../images/logo1.png";

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
    width: "82,55px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Box
      sx={{
        height: "fit-inherit",
        backgroundColor: "#1f383f",
      }}
    >
      <Container
        sx={{
          paddingTop: "26px",
          paddingBottom: "26px",
        }}
      >
        <Box style={{ imageWrapper }}>
          <CardMedia
            component="img"
            image={logo}
            alt={"Tappx logo"}
            sx={{ maxHeight: "23.39px", width: "auto" }}
            style={{ image }}
          />
        </Box>
        <Typography variant="body2" color="#666666">
          © 2020 Todos los derechos reservados | Política de Privacidad y
          Cookies | Aviso Legal | Acerca de Tappx
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
