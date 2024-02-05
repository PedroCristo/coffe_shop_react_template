import menuData from "../data/menu";

function MenuSection() {
    return(
        <div className="bg-menu" id="menu">
            <div className="menu-title">
                <section>Our Coffe Menu</section>
                <h2>Always is time for coffee</h2>
                <hr />
            </div>
            <div className="menu-flex">
                {menuData.map((item) => 
                <div className="menu1" key={item.id}>
                    <div className="small-image">
                        <img src={item.imageUrl} alt={item.name} />
                    </div>
                    <div>
                        <h4>{item.name}</h4>
                    </div>
                    <div className="line"></div>
                    <div>
                        <h4>€{item.price.toFixed(2)}</h4>
                    </div>
                </div>
                )}
            </div>
            <div className="menu-link">
                <a href="#">view menu</a>
            </div>
    </div>

    )
}

export default MenuSection;