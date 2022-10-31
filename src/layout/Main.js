import React from "react";
import { Container, CircularProgress, Typography } from "@mui/material";
import { useRandomUsersContext } from "../contexts/randomUsersContexts";
import RandomUsersList from "../components/randomUsersList";
import EditUserModal from "../components/EditUserModal";

const PokedexPage = () => {
  const { randomUsersList, editUserModal } = useRandomUsersContext();
  const { isLoading, error } = randomUsersList;
  const { isOpen } = editUserModal;

  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "#EEEEEE",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isLoading && <CircularProgress />}
      {!isLoading && <RandomUsersList />}
      {error && <Typography>Upss algo fue mal</Typography>}
      {isOpen && <EditUserModal />}
    </Container>
  );
};

export default PokedexPage;
