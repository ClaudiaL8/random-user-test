import React from "react";
import { Box, Typography, CardMedia, Container } from "@mui/material";
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
        <Typography variant="body2" sx={{ color: "#ffffff", marginTop: 5 }}>
          The page you were looking for doesn't appear to exist.
        </Typography>
      </Container>
    </Box>
  );
};

export default PageNotFound;
