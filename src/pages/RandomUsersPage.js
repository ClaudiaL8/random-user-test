import React from "react";
import { Container, CircularProgress, Typography } from "@mui/material";
import { useRandomUsersContext } from "../contexts/randomUsersContexts";
import RandomUsersList from "../components/randomUsersList";

const PokedexPage = () => {
  const { randomUsersList } = useRandomUsersContext();
  const { isLoading, data, error } = randomUsersList;

  return (
    <Container>
      {isLoading && <CircularProgress />}
      {!!data?.length && <RandomUsersList />}
      {error && <Typography>Upss algo fue mal</Typography>}
    </Container>
  );
};

export default PokedexPage;
