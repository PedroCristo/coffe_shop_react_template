import servicesData from '../data/services';
import useFetchCSVData from '../data/db/services';


function ServicesSection() {
    const { csvData, loading, error } = useFetchCSVData();
    console.log(csvData)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-service">
            {servicesData.map((item) => (
                <div className="service-one" key={item.id}>
                    <img src={item.imgUrl} alt={item.name} />
                    <div className="overlay">
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



