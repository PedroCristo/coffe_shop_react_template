import servicesData from "../data/services";

function ServicesSection() {
  return (
    <div className="bg-service">
      {servicesData.map((item) => (
        <div className="service-one" key={item.id}>
          <img src={item.imgUrl} alt={item.name} />
          <div className="overla">
            <div className="over-txt">
              <p>{item.name}</p>
              <h4>{item.content}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesSection;
