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
import { IconButton } from "@mui/material";
import { CarProp } from "./Car";
import { useEffect, useState } from "react";
import getAllCars from "../../Service/CarDataService";

function CarPage() {
  const [carList, setCarList] = useState<CarProp[]>([]);

  useEffect(() => {
    getAllCars()
      .getCarData()
      .then((carData) => setCarList(carData));
  }, []);

  return (
    <>
      <Navbar />
      <Description />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Car ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carList.map((car) => (
              <TableRow
                key={car.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="right">{car.name}</TableCell>

                <TableCell align="right">{car.year}</TableCell>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CarPage;
