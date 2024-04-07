
import Navbar from "../Molecules/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import CreateCarPage from "./CreateCarPage";
import CarPage from "./CarPage";
import EditCarPage from "./EditCarPage";
import DetailedCarPage from "./DetailedCarPage";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="car" Component={CarPage} />
          <Route path="login" element={<LoginPage />} />
          <Route path="createCar" element={<CreateCarPage />} />
          <Route path="editCar" element={<EditCarPage />} />
          <Route path="details" element={<DetailedCarPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
