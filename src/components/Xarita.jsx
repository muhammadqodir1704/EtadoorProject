import { useState, useEffect } from "react";

const Xarita = () => {
  const [locations, setLocations] = useState([]);
  const [selectedCity, setSelectedCity] = useState({
    center: "55.7558,37.6173", 
    zoom: 4  
  });

  useEffect(() => {
    fetch("https://etadoor.up.railway.app/api/contacts/addresses")
      .then((response) => response.json())
      .then((data) => {
        const addressArray = Array.isArray(data) ? data : data.data || [];
        setLocations(addressArray);
      })
      .catch((error) => {
        console.log("Error fetching addresses:", error);
        setLocations([]);
      });
  }, []);

  const handleCityClick = (coords) => {
    console.log("City clicked with coords:", coords);
    setSelectedCity({
      center: coords,
      zoom: 11 
    });
  };

  return (
    <div className="container mx-auto flex flex-wrap items-center gap-10 mt-12">
      <div className="flex-1">
        <iframe
          src={`https://maps.google.com/maps?q=${selectedCity.center}&z=${selectedCity.zoom}&output=embed`}
          width="100%"
          height="440"
          allowFullScreen
          loading="lazy"
          title="Bizning manzil"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
      <div className="flex-1">
        <h1
          style={{ fontSize: 34, fontWeight: 700 }}
          className="text-2xl font-noto-sans-georgian"
        >
          Где купить?
        </h1>
        <div className="mt-7 space-y-4 text-sm cursor-pointer scroll-container">
          <ul>
            {locations.map((location, index) => (
              <li
                key={index}
                className="items-center p-2 cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => handleCityClick(location.coords)}
              >
                <p className="ms-2 font-semibold">{location.name}</p>
                <p className="ms-2 mb-4">{location.phone}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Xarita;