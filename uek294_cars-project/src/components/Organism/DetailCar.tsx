import Navbar from "../Molecules/Navbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarService from "../../Service/CarDataService";

function DetailedCar() {
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
        alert("Id was not found.");
      }
    };

    fetchData();
  }, [carId]);

  return (
    <>
      <Navbar />
      <Typography>
        <h1>Detailed version</h1>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography gutterBottom variant="h5" component="div">
            <TextField
              id="outlined-required-read-only-input"
              label="Carname"
              value={name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <TextField
              id="outlined-required-read-only-input"
              label="Year"
              value={year}
              InputProps={{
                readOnly: true,
              }}
            />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default DetailedCar;
