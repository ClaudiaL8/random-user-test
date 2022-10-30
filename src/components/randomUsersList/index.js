import React from "react";
import { Box, Button, CircularProgress } from "@mui/material";
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
// import SaveIcon from "@mui/icons-material/SaveIcon";

const Pokedex = () => {
  const {
    randomUsersList,
    setRandomUsersList,
    addNewRandomUser,
    isLoadingButtonAdd,
  } = useRandomUsersContext();
  const { data } = randomUsersList;

  const Toolbar = () => {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
        display="flex"
        justifyContent="space-between"
        marginBottom={2}
        alignItems="center"
      >
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => {
            addNewRandomUser();
          }}
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
      newColumn.getActions = (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => deleteUser(params.id)}
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => editUser(params.id)}
        />,
      ];
    }
    return newColumn;
  });

  const deleteUser = (id) => {
    setRandomUsersList({
      ...randomUsersList,
      data: data.filter((user) => user.id !== id),
    });
  };

  const editUser = (id) => {
    console.log({ id });
  };

  const handleOnCellClick = ({ row }) => {
    console.log({ row });
  };

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={data}
            columns={newColumns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            disableColumnMenu
            components={{ Toolbar: Toolbar }}
            onRowClick={handleOnCellClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Pokedex;
