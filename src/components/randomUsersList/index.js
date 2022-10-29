import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { useRandomUsersContext } from "../../contexts/randomUsersContexts";
import { columns } from "./randomUsersListColumns";

const Pokedex = () => {
  const { randomUsersList } = useRandomUsersContext();
  const { data } = randomUsersList;

  const QuickSearchToolbar = () => {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
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

  const handleOnCellClick = ({ row }) => {
    console.log({ row });
  };

  return (
    <Box sx={{ height: 920, width: "100%" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            disableColumnMenu
            components={{ Toolbar: QuickSearchToolbar }}
            onRowClick={handleOnCellClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Pokedex;
