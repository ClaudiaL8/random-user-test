import React from "react";
import {
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useRandomUsersContext } from "../contexts/randomUsersContexts";

const EditUserModal = () => {
  const {
    editUserModal,
    setEditUserModal,
    handleChangeInputValue,
    handleSubmitForm,
  } = useRandomUsersContext();
  const { isOpen, isLoading, form, error } = editUserModal;
  const { name, city, email, cell, bundle, active, category } = form;

  const handleClose = () => {
    setEditUserModal({
      isOpen: false,
    });
  };

  const categories = [
    {
      value: "Tool",
      label: "Tool",
    },
    {
      value: "Music",
      label: "Music",
    },
    {
      value: "Game",
      label: "Game",
    },
    {
      value: "Social",
      label: "Social",
    },
  ];

  const handleChangeTextField = ({ target }) => {
    const name = target.name;
    const value = target.value;
    handleChangeInputValue(name, value);
  };
  const handleChangeCheckbox = ({ target }) => {
    const name = target.name;
    const value = target.checked;
    handleChangeInputValue(name, value);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={"md"}>
      <DialogTitle>
        <EditIcon /> {name}
      </DialogTitle>
      <DialogContent sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              id="name"
              label="Name"
              variant="standard"
              value={name}
              name="name"
              onChange={handleChangeTextField}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="city"
              label="City"
              variant="standard"
              value={city}
              name="city"
              onChange={handleChangeTextField}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="email"
              label="Email"
              variant="standard"
              value={email}
              name="email"
              onChange={handleChangeTextField}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="cell"
              label="Cell"
              variant="standard"
              value={cell}
              name="cell"
              onChange={handleChangeTextField}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="bundle"
              label="Bundle"
              variant="standard"
              value={bundle}
              name="bundle"
              onChange={handleChangeTextField}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="category"
              select
              label="Category"
              variant="standard"
              value={category}
              name="category"
              onChange={handleChangeTextField}
              sx={{ width: "100%" }}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={active}
                  onChange={handleChangeCheckbox}
                  name="active"
                />
              }
              label="Active"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmitForm}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserModal;
