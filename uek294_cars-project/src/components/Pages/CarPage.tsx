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
import { useEffect, useState } from "react";
import CarService from "../../Service/CarDataService";

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

  return (
    <>
      <Navbar />
      <Description />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Car ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {APICarData.map((car) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="right">{car.id}</TableCell>
                  <TableCell align="right">{car.Name}</TableCell>

                  <TableCell align="right">{car.Year}</TableCell>
                  <IconButton edge="end" aria-label="delete">
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
