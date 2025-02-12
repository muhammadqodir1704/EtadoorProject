import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import ZakazPrinyat from "./ZakazPrinyat";
import "../styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  height: 361,
  bgcolor: "#E5E5E5",
  boxShadow: 24,
  p: 4,
};

export default function ZaprositModal({ open, handleClose }) {
  const initialFormState = {
    itemId: 1,
    itemType: "DOOR",
    name: "",
    phone: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [zakazOpen, setZakazOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Yuborilayotgan ma'lumot:", formData);

    try {
      const response = await axios.post(
        "https://etadoor.up.railway.app/api/v1/additional/price-list",
        formData
      );
      console.log("Success:", response.data);
      
      setFormData(initialFormState);
      handleClose();
      setZakazOpen(true); 

      setTimeout(() => {
        setZakazOpen(false);
      }, 3000);

    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Price listni yuborishda xatolik yuz berdi!");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box sx={style}>
          <Typography className="text-center text-custom-red" style={{ fontSize: 34, fontWeight: 700 }}>
            Запросить прайс-лист
          </Typography>
          <Typography className="text-center text-custom-black" style={{ fontSize: 18, fontWeight: 400 }}>
            Оставьте свои контакты <br /> и мы вышлем вам наш прайс-лист
          </Typography>
          <form onSubmit={handleSubmit} className="mt-3 flex flex-col items-center">
            <input
              style={{ width: 450, height: 45 }}
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              className="p-2 mt-4 w-full text-center bg-white"
              required
            />
            <div className="flex justify-center gap-2">
              <input
                style={{ width: 220, height: 45 }}
                type="text"
                name="phone"
                placeholder="Телефон*"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 mt-4 w-full text-center bg-white"
                required
              />
              <input
                style={{ width: 220, height: 45 }}
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="p-2 mt-4 w-full text-center bg-white"
                required
              />
            </div>

            <div className="flex items-center mt-4 gap-8">
              <p style={{ fontSize: 12, fontWeight: 400 }} className="font-circe">
                Нажимая на кнопку, вы даете согласие с <br /> Политикой конфиденциальности
              </p>
              <button
                type="submit"
                className="bg-custom-red text-white font-circe flex justify-center items-center"
                style={{ width: 182, height: 39, fontSize: 14, fontWeight: 700 }}
                disabled={isLoading} 
              >
                {isLoading ? (
                  <span className="loader"></span> 
                ) : (
                  "Отправить заявку"
                )}
              </button>
            </div>
          </form>
        </Box>
      </Modal>
      <ZakazPrinyat open={zakazOpen} onClose={() => setZakazOpen(false)} />
    </>
  );
}
