//Create car
import Navbar from "../Molecules/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import CarService from "../../Service/CarDataService";
import { Link } from "react-router-dom";

function CreateCarPage() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  const handleCreateCar = async () => {
    try {
      await CarService().createCar(name, year);
      alert("Creating car was successful.");
    } catch (error) {
      alert("Error creating a car!");
    }
  };

  return (
    <>
      <Navbar />
      <h1>Create a new car</h1>
      
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
                onClick={handleCreateCar}
                component={Link}
                to="/car"
              >
                Create
              </Button>
           
          </Grid>
        </Grid>
      
    </>
  );
}

export default CreateCarPage;
