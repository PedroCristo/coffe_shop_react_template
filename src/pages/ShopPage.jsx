import ShopSection from "../components/ShopSection";
import Header from "../components/Header";

function ShopPage() {
  return (
    <div>
      <Header />
      <ShopSection
        title={"Our Shop"}
        btnLink={"/"}
        btnTitle={"Go to the home page"}
      />
    </div>
  );
}

export default ShopPage;
