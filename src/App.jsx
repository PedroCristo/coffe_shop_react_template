import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { Route, Routes } from 'react-router-dom'; 
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import MenuPage from "./pages/MenuPage";

import ScrollTop from "./components/extras/ScrollTop";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollTop />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/menu-page" element={<MenuPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
