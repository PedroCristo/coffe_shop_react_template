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
import Carousel from "./components/Testimonials";
import MapSection from "./components/MapSection";

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
      <Carousel />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
