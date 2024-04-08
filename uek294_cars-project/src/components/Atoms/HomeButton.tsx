import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <Button variant="contained" color="secondary" component={Link} to="/car">
      HomePage
    </Button>
  );
}
