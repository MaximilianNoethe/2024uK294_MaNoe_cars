//Edit a car
import Navbar from "../Molecules/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import CarService from "../../Service/CarDataService";
import { Link } from "react-router-dom";

function EditCarPage() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  const updateOnClickHandler = async () => {
    try {
      await CarService().updateCar(name, year);
    } catch (error) {
      console.error("Error updating a car", error);
    }
  };
  return (
    <>
      <Navbar />
      <h1>Update a car</h1>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>
            <TextField
              id="margin-normal"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Rendered the whole site and checks if something changed, if so then it sets the new data
              variant="standard"
            />
            <br />
            <TextField
              id="margin-normal"
              label="Year"
              // type="date"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              variant="standard"
            />
          </Typography>
          <Button
            variant="contained"
            onClick={updateOnClickHandler}
            component={Link}
            to="/car"
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default EditCarPage;
