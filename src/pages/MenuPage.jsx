import Header from "../components/Header";
import MenuSection from "../components/MenuSection";

function MenuPage() {
  return (
    <div>
      <Header />
      <MenuSection menuPage={"menu-page"} btnLink={"/"} btnTitle={"Go to the home page"} />
    </div>
  );
}

export default MenuPage;
