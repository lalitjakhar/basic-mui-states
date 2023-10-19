import { Box, Button, Container, Grid, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTodo from "../Modal/editTodo";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoData, setTodoData] = useState("");
  const [open, setOpen] = useState(false);



  const handleAddButtonClick = () => {
    setTodoData(inputValue);
  };
  return (
    <>
      <Container>
        <Box sx={{ margin: "1rem" }}>
          <Box sx={{ padding: "1rem", display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              placeholder="Add Text"
              variant="outlined"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></TextField>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              color="success"
              onClick={handleAddButtonClick}
              sx={{ width: "7rem" }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
      <Box sx={{ padding: "2rem 5rem", display: "flex", gap: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              variant="h5"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              To Do
            </Typography>
            <Box
              sx={{
                padding: "1rem",
                border: "1px solid grey",
                gap: 2,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={1} sx={{ display: "flex" }}>
                  <CreateIcon sx={{ color: "blueviolet" }} onClick={()=>setOpen(true)} />
                </Grid>
                <Grid item xs={9}>
                  <Typography>{todoData}</Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <CheckIcon sx={{ color: "green" }} />
                  <DeleteIcon sx={{ color: "red" }} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h5"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Completed
            </Typography>
            <Box
              sx={{
                padding: "1rem",
                border: "1px solid grey",
                gap: 2,
              }}
            >
              <Grid container spacing={2} justifyContent="space-between">
                <Grid item>
                  <Typography>fhfusdhfishg</Typography>
                </Grid>
                <Grid item xs={1}>
                  <DeleteIcon sx={{ color: "red" }} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Modal
        aria-labelledby="close-modal-title"
        open={open}
       onClose={()=>setOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
       <Typography>sqwghfvwhedfgqygy</Typography>
      </Modal>
    </>
  );
};

export default Home;
