import React from "react";
import { Box, Button, CircularProgress, Stack } from "@mui/material";
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useRandomUsersContext } from "../../contexts/randomUsersContexts";
import { columns } from "./randomUsersListColumns";

const Pokedex = () => {
  const {
    randomUsersList,
    setRandomUsersList,
    addNewRandomUser,
    isLoadingButtonAdd,
    setEditUserModal,
  } = useRandomUsersContext();
  const { data } = randomUsersList;

  const Toolbar = () => {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
          paddingTop: 2,
        }}
        display="flex"
        justifyContent="space-between"
        marginBottom={2}
        alignItems="center"
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={addNewRandomUser}
          color="primary"
        >
          {isLoadingButtonAdd && <CircularProgress size={20} />}
          {!isLoadingButtonAdd && "Add"}
        </Button>
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput) =>
            searchInput
              .split(",")
              .map((value) => value.trim())
              .filter((value) => value !== "")
          }
        />
      </Box>
    );
  };

  const newColumns = columns.map((column) => {
    const newColumn = { ...column };
    if (column.type === "actions") {
      newColumn.getActions = (user) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => editUser(user.row)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => deleteUser(user.id)}
        />,
      ];
    } else if (column.type === "active") {
      console.log({ newColumn });
    }
    return newColumn;
  });

  const deleteUser = (id) => {
    setRandomUsersList({
      ...randomUsersList,
      data: data.filter((user) => user.id !== id),
    });
  };

  const editUser = (user) => {
    setEditUserModal({
      isOpen: true,
      form: {
        ...user,
        bundle: user.bundle ? user.bundle : "",
        active: user.active ? user.active : false,
        category: user.category ? user.category : "",
      },
    });
  };

  const handleOnCellClick = ({ row }) => {
    editUser(row);
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ flexGrow: 1, minHeight: 50 }}>
          <DataGrid
            rows={data}
            columns={newColumns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            disableColumnMenu
            components={{
              Toolbar: Toolbar,
              NoRowsOverlay: () => (
                <Stack
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  No users
                </Stack>
              ),
            }}
            onRowDoubleClick={handleOnCellClick}
            noRowsLabel="No users"
            sx={{ border: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Pokedex;
