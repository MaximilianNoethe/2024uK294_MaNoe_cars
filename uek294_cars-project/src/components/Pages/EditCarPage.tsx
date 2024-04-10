//Edit a car
import Navbar from "../Molecules/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CarService from "../../Service/CarDataService";
import { Link, useParams } from "react-router-dom";

function EditCarPage() {
  const { carId } = useParams(); // Gets carId from URL params
  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    // Function to load data from car with the selected carId
    const fetchData = async () => {
      try {
        const carData = await CarService().getCarById(carId);
        setName(carData.Name);
        setYear(carData.Year);
      } catch (error) {
        alert("Error fetching car data.");
      }
    };

    fetchData();
  }, [carId]);

  const updateOnClickHandler = async () => {
    try {
      await CarService().updateCar(carId, name, year);
      alert("Updating car was successful.");
    } catch (error) {
      alert("Error updating a car");
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
              label="Carname"
              value={name}
              onChange={(e) => setName(e.target.value)} // Rendered the whole site and checks if something changed, if so then it sets the new data
              variant="standard"
            />
            <br />
            <TextField
              id="margin-normal"
              label="Year"
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
            Update car
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default EditCarPage;
