import React from "react";
import { Box, Typography, CardMedia, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image404 from "../images/404-img.png";

const PageNotFound = () => {
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
    width: "467px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1E282C",
        paddingTop: "70px",
      }}
      alignItems="center"
    >
      <Container
        sx={{
          paddingTop: "26px",
          paddingBottom: "26px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box style={{ imageWrapper }}>
          <CardMedia
            component="img"
            image={image404}
            alt={"Tappx logo"}
            sx={{ maxHeight: "467px", width: "auto" }}
            style={{ image }}
          />
        </Box>
        <Typography
          sx={{
            color: "#ffffff",
            marginTop: 5,
            fontSize: "19px",
            fontWeight: 400,
          }}
        >
          The page you were looking for doesn't appear to exist.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          color="primary"
          sx={{ marginTop: 5, fontSize: "12px", fontWeight: 700 }}
        >
          GO BACK TO HOME PAGE
        </Button>
      </Container>
    </Box>
  );
};

export default PageNotFound;
