import Header from "../components/Header";
import MenuSection from "../components/MenuSection";
import { useEffect } from 'react';


function MenuPage() {
  useEffect(() => {
    document.title = "Menu";
    return () => {
      document.title = "Coffe Heven Template";
    };
  }, []);

  return (
    <div>
      <Header />
      <MenuSection menuPage={"menu-page"} btnLink={"/"} btnTitle={"Go to the home page"} />
    </div>
  );
}

export default MenuPage;
