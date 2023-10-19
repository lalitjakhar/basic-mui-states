import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container>
        <Box sx={{ margin: "1rem" }}>
          <Box sx={{ padding: "1rem", display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              placeholder="Add Text"
              variant="outlined"
            ></TextField>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              color="success"
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
            <Typography variant="h5" sx={{display:'flex', justifyContent:'center'}}>To Do</Typography>
            <Box sx={{ padding: "1rem", display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Add Text"
                variant="outlined"
              ></TextField>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{display:'flex', justifyContent:'center'}}>Completed</Typography>
            <Box sx={{ padding: "1rem", display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Add Text"
                variant="outlined"
              ></TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
