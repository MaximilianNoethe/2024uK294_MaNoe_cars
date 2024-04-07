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
          <Route path="login" Component={LoginPage} />
          <Route path="createCar" Component={CreateCarPage} />
          <Route path="editCar" Component={EditCarPage} />
          <Route path="details" Component={DetailedCarPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
