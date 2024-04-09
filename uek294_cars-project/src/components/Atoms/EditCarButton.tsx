import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditCarButton({ carId }) {
  return (
    <>
      <IconButton component={Link} to={`/update/${carId}`}>
        <EditIcon />
      </IconButton>
    </>
  );
}
