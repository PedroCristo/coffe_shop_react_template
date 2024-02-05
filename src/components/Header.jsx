import headerNavigationData from "../data/headerNavigation";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="images/utilities_images/logo.png" alt="Logo" />
      </div>
      <nav className="navigation">
       {headerNavigationData.map((item =>
        <li key={item.id}><a href={item.linkUrl}>{item.name}</a></li>
       ))}
      </nav>
      <div className="bars">
        <img src="pic/menu.png" alt="" className="bar" />
      </div>
    </header>
  );
}

export default Header;
