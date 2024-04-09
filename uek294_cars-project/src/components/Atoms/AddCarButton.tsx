
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

export default function AddCarButton() {
  return (
    <Fab
      size="medium"
      color="secondary"
      aria-label="add"
      component={Link}
      to="/post"
    >
      <AddIcon />
    </Fab>
  );
}
