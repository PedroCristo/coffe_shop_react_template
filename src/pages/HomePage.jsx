import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import ServicesSection from "../components/ServicesSection";
import ShopSection from "../components/ShopSection";
import MenuSection from "../components/MenuSection";
import GallerySection from "../components/GallerySection";
import AboutSection from "../components/AboutSection";
import Carousel from "../components/Testimonials";

function HomePage() {
  return (
    <div>
      <Header homePage="true" />
      <HomeSection />
      <ServicesSection />
      <ShopSection />
      <MenuSection />
      <GallerySection />
      <Carousel />
      <AboutSection />
    </div>
  );
}
export default HomePage;
