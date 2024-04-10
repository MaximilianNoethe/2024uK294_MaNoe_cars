import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import CreateCarPage from "./components/Pages/CreateCarPage";
import CarPage from "./components/Pages/CarPage";
import EditCarPage from "./components/Pages/EditCarPage";
import DetailedCarPage from "./components/Pages/DetailedCarPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="car" Component={CarPage} />
          <Route path="car/:carId" Component={DetailedCarPage} />
          <Route path="login" Component={LoginPage} />
          <Route path="post" Component={CreateCarPage} />
          <Route path="update/:carId" Component={EditCarPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
