import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar.jsx";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const CarCard = lazy(() => import("../pages/Car/CarCard"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
y;

export default App;
