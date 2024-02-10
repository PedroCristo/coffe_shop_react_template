// import menuData from "../data/menu";
import useFetchCSVData from '../data/externalDB/fetchData.js';

function MenuSection() {
  const { csvData, loading, error } = useFetchCSVData('https://docs.google.com/spreadsheets/d/e/2PACX-1vQCYaeEDOeczGVPFeOjjCWBcCSJH9FFwT7J1uV27iwTMfj53tlUpP2zia-U7FByuFBwmchQObM61Mfu/pub?output=csv');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="bg-menu" id="menu">
      <div className="overlay"></div>
      <div className="menu-box">
        <div className="menu-title">
          <section>Our Coffe Menu</section>
          <h2>Always is time for coffee</h2>
          <hr />
        </div>
        <div className="menu-flex">
          {csvData.map((item) => (
            <div className="menu1" key={item.id}>
              <div className="small-image">
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div>
                <h4>{item.name}</h4>
              </div>
              <div className="line"></div>
              <div>
                {item.oldPrice !=="" ? (
                  <div>
                    <h4 className="line-red">€ {item.oldPrice}</h4>
                    <h4>€ {item.price}</h4>
                  </div>
                ) : (
                  <h4>€ {item.price}</h4>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="menu-link">
          <a href="#">view menu</a>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
