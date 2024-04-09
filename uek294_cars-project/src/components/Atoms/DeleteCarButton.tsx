import { IconButton } from "@mui/material";
import CarService from "../../Service/CarDataService";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteCarButton() {
  const [APICarData, setAPICarData] = useState([]);

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
    <IconButton
      edge="end"
      aria-label="delete"
      onClick={() => deleteOnClickHandler(car.id)}
    >
      <DeleteIcon />
    </IconButton>
  );
}
