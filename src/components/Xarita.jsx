import { useState, useEffect } from "react";

const Xarita = () => {
  const [locations, setLocations] = useState([]);
  const [selectedCity, setSelectedCity] = useState({
    center: "41.2995,69.2401", 
    zoom: 6
  });
  const [activeLocation, setActiveLocation] = useState(null);

  useEffect(() => {
    fetch("https://etadoor.up.railway.app/api/contacts/addresses")
      .then((response) => response.json())
      .then((response) => {
        const addressArray = response.data || [];
        setLocations(addressArray);
      })
      .catch((error) => {
        console.log("Error fetching addresses:", error);
        setLocations([]);
      });
  }, []);

  const handleCityClick = (location, id) => {
    const coords = `${location.latitude},${location.longitude}`;
    setSelectedCity({
      center: coords,
      zoom: 11
    });
    setActiveLocation(id);
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
            {locations.map((location) => (
              <li
                key={location.id}
                className={`items-center p-2 cursor-pointer transition-all duration-300 ${
                  activeLocation === location.id
                    ? "bg-blue-100  "
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleCityClick(location.location, location.id)}
              >
                <p className="ms-2 font-semibold">{location.name}</p>
                <p className="ms-2">{location.street}</p>
                <p className="ms-2">{location.city}</p>
                <p className="ms-2 mb-4">{location.phoneNumber}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Xarita;
