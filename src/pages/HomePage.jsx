import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import ServicesSection from "../components/ServicesSection";
import ShopSection from "../components/ShopSection";
import MenuSection from "../components/MenuSection";
import GallerySection from "../components/GallerySection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForm from "../components/ContactForm";

function HomePage() {
  return (
    <div>
      <Header homePage="true" />
      <HomeSection />
      <ServicesSection />
      <MenuSection
        homePage={true}
        btnLink={"/menu-page"}
        btnTitle={"Full Menu"}
      />
      <ShopSection
        homePage={true}
        title={"Products"}
        btnLink={"/shop-page"}
        btnTitle={"Go to the shop"}
      />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <ContactForm />
    </div>
  );
}
export default HomePage;
