//Car by id
import Navbar from "../Molecules/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarService from "../../Service/CarDataService";

function DetailedCarPage() {
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

  return (
    <>
      <Navbar />
      <h1>Detailed version</h1>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <TextField
                id="standard-required-read-only-input"
                label="Carname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <TextField
                id="outlined-required-read-only-input"
                label="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
}

export default DetailedCarPage;
