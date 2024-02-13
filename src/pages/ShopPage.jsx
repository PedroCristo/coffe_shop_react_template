import ShopSection from "../components/ShopSection";
import Header from "../components/Header";
import Banner from "../components/extras/Banner";
import { useEffect } from "react";

function ShopPage() {
  useEffect(() => {
    document.title = "Shop";
    return () => {
      document.title = "Coffe Heven Template";
    };
  }, []);

  return (
    <div>
      <Header />
      <Banner bannerBg={"bannerShop"} />
      <ShopSection
        title={"Our Shop"}
        btnLink={"/"}
        btnTitle={"Go to the home page"}
      />
    </div>
  );
}

export default ShopPage;
