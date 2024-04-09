import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

export default function ByIdButton({ carId }) {
  return (
    <>
      <IconButton component={Link} to={`/car/${carId}`}>
        <InfoIcon />
      </IconButton>
    </>
  );
}
