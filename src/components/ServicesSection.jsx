// import servicesData from '../data/services';
import useFetchCSVData from '../data/externalDB/fetchData.js';


function ServicesSection() {
    const { csvData, loading, error } = useFetchCSVData('https://docs.google.com/spreadsheets/d/e/2PACX-1vQCYaeEDOeczGVPFeOjjCWBcCSJH9FFwT7J1uV27iwTMfj53tlUpP2zia-U7FByuFBwmchQObM61Mfu/pub?gid=0&single=true&output=csv');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-service">
            {csvData.map((item) => (
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



