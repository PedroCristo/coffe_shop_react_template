import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import ShopSection from "./components/ShopSection";
import MenuSection from "./components/MenuSection";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HomeSection />
      <ServicesSection />
      <ShopSection />
      <MenuSection />
      <GallerySection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
