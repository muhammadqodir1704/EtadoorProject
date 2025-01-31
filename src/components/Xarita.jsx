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
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
  {
    name: "Амир Темур майдони, Тошкент",
    coords: "41.2995,69.2415",
    phone: "+998 71 200 00 00",
  },
];

const Xarita = () => {
  const [selectedCoords, setSelectedCoords] = useState(locations[0].coords);

  return (
    <div className="container mx-auto flex flex-wrap gap-10 mt-12">
      <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.701435157919!2d69.24153831542145!3d41.29949587927002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4f6b8c3b2d1%3A0x8b41bfa5c9c0eafa!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1691570405772!5m2!1sen!2s"
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
        <div className="mt-7 space-y-4 text-sm cursor-pointer  scroll-container">
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
