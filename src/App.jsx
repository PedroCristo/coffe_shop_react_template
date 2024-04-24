import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import MenuPage from "./pages/MenuPage";
import ScrollTop from "./components/extras/ScrollTop";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";

function App() {
  return (
    <div>
      <ShoppingCartProvider>
        <Navbar />
        <ScrollTop />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/menu-page" element={<MenuPage />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
