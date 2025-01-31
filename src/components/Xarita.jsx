import { useState } from "react";

const locations = [
  {
    name: "Москва, Красная площадь дом 1",
    coords: "55.7539,37.6208",
    phone: "+7 499 375 77 65 ООО “Рога и копыта”",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  // Yangi manzillar qo'shish mumkin
];

const Xarita = () => {
  const [selectedCoords, setSelectedCoords] = useState(locations[0].coords);

  return (
    <div className="container mx-auto flex flex-wrap gap-10 mt-12">
      <div className="flex-1">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${selectedCoords}`}
          width="100%"
          height="440"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bizning manzil"
          className="rounded-lg shadow-md"></iframe>
      </div>
      <div className="flex-1">
        <h1 className="text-2xl">Где купить?</h1>
        <div className="mt-7 space-y-4 text-sm cursor-pointer">
          <ul>
            {locations.map((location, index) => (
              <li
                key={index}
                className="items-center p-2 cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => setSelectedCoords(location.coords)}>
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
