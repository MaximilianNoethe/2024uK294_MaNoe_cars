import Description from "../Atoms/Description";
import Navbar from "../Molecules/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Link } from "@mui/material";
import { useEffect, useState } from "react";
import CarService from "../../Service/CarDataService";
import EditCarButton from "../Atoms/EditCarButton";
import ByIdButton from "../Atoms/ByIdButton";

function CarPage() {
  const [APICarData, setAPICarData] = useState([]);

  useEffect(() => {
    CarService()
      .getCarData()
      .then((response) => {
        setAPICarData(response);
        console.log(response);
      });
  }, []);

  const deleteOnClickHandler = async (carId) => {
    try {
      await CarService().deleteCar(carId);

      const updatedCarData = APICarData.filter((car) => car.id !== carId);
      setAPICarData(updatedCarData);
    } catch (error) {
      alert("Error deleting a car:");
    }
  };

  return (
    <>
      <Navbar />
      <Description />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Car ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {APICarData.map((car) => {
              return (
                <TableRow>
                  <TableCell>{car.id}</TableCell>
                  <TableCell align="right">{car.Name}</TableCell>
                  <TableCell align="right">{car.Year}</TableCell>
                  <ByIdButton carId={car.id} />
                  <EditCarButton carId={car.id} />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteOnClickHandler(car.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CarPage;
