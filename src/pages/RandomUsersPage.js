import React from "react";
import { Container, CircularProgress, Typography } from "@mui/material";
import { useRandomUsersContext } from "../contexts/randomUsersContexts";
import RandomUsersList from "../components/randomUsersList";

const PokedexPage = () => {
  const { randomUsersList } = useRandomUsersContext();
  const { isLoading, data, error } = randomUsersList;

  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        border: "1px solid red",
      }}
    >
      {isLoading && <CircularProgress />}
      {!!data?.length && <RandomUsersList />}
      {error && <Typography>Upss algo fue mal</Typography>}
    </Container>
  );
};

export default PokedexPage;
