import Title from "../Atoms/Title";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AddCarButton from "../Atoms/AddCarButton";
import HomeButton from "../Atoms/HomeButton";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Title />

          <HomeButton />

          <AddCarButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
