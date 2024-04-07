//Create car
import Navbar from "../Molecules/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
    } catch (error) {
      console.error("Error creating a car", error);
    }
  };

  return (
    <>
      <Navbar />
      <h1>Create a new car</h1>

      <Card className="cardWrapper" sx={{ maxWidth: 400 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardContent>
              <Typography>
                <TextField
                  id="standard-required-read-only-input"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="standard"
                />
                <TextField
                  id="standard-required-read-only-input"
                  label="Year"
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
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default CreateCarPage;
