import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import ZakazSecondPrin from "./ZakazSecondPrin";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  height: 651,
  bgcolor: "#E5E5E5",
  boxShadow: 24,
  p: 4,
};

export default function Zakaz({ open, handleClose, productData }) {
const initialFormState = {
  itemId: productData?.id || "", 
  itemType: "DOOR",
  customerName: "dwdad",
  phoneNumber: "", 
  orderType: "FULL_SET",
  email: "",
  comment: "",
  deliveryAddress: "dsdsdsds", //
  deliveryDate: "",
  preferredDeliveryTime: new Date().toISOString(), // Hozirgi vaqt
};

  const [formData, setFormData] = React.useState(initialFormState);
  // const [zakazOpen, setZakazOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Yuborilayotgan ma'lumot:", formData);
  
    try {
      const response = await axios.post(
        "https://etadoor.up.railway.app/api/v1/additional/checkout",
        formData
      );
      console.log("Success:", response.data);
  
      setFormData(initialFormState);
      handleClose();
  
      setTimeout(() => {
        setZakazOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Zakaz berishda xatolik yuz berdi!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="text-center text-custom-red"
            style={{ fontSize: 34, fontWeight: 700 }}
            id="modal-modal-title"
            variant="h6"
          >
            {productData.name}
          </Typography>
          <Typography
            className="text-center text-custom-black "
            style={{ fontSize: 18, fontWeight: 400 }}
            id="modal-modal-description"
          >
            <p className="text-lg text-gray-700 flex items-center">
              <p
                className="font-circe"
                style={{ fontSize: 20, fontWeight: 400 }}
              >
                Артикул:
              </p>
              <hr
                style={{ color: "#00000040" }}
                className="flex-grow border-t-2 border-dashed mx-2"
              />
              <p style={{ fontSize: 20, fontWeight: 700 }}>
                {productData.article || "Noma'lum"}
              </p>
            </p>

            <p className="text-lg text-gray-700 flex items-center">
              <p
                className="font-circe"
                style={{ fontSize: 20, fontWeight: 400 }}
              >
                Цвет:
              </p>
              <hr
                style={{ color: "#00000040" }}
                className="flex-grow border-t-2 border-dashed mx-2"
              />
              <p style={{ fontSize: 20, fontWeight: 700 }}>
                {productData.color || "Noma'lum"}
              </p>
            </p>

            <p className="text-lg text-gray-700 flex items-center">
              <p
                className="font-circe"
                style={{ fontSize: 20, fontWeight: 400 }}
              >
                Страна:
              </p>
              <hr
                style={{ color: "#00000040" }}
                className="flex-grow border-t-2 border-dashed mx-2"
              />
              <p style={{ fontSize: 20, fontWeight: 700 }}>
                {productData.country || "Noma'lum"}
              </p>
            </p>

            <p className="text-lg text-gray-700 flex items-center">
              <p
                className="font-circe"
                style={{ fontSize: 20, fontWeight: 400 }}
              >
                Наличие:
              </p>
              <hr
                style={{ color: "#00000040" }}
                className="flex-grow border-t-2 border-dashed mx-2"
              />
              <p style={{ fontSize: 20, fontWeight: 700 }}>
                {productData.availability || "Noma'lum"}
              </p>
            </p>
          </Typography>

          <div className="mt-3 flex flex-col items-center">
            <input
              name="customerName" // name attributi qo'shish kerak
              value={formData.customerName} // value qo'shish kerak
              onChange={handleChange}
              style={{ width: 450, height: 45 }}
              type="text"
              placeholder="Ваше имя"
              className="p-2 mt-4 w-full text-center bg-white"
            />
            <div className="flex justify-center gap-2">
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={{ width: 220, height: 45 }}
                type="text"
                placeholder="Телефон*"
                className=" p-2 mt-4 w-full text-center bg-white "
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: 220, height: 45 }}
                type="text"
                placeholder="Email*"
                className=" p-2 mt-4 w-full text-center bg-white "
                required
              />
                 <input
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                style={{ width: 220, height: 45 }}
                type="text"
                placeholder="deliveryAdress*"
                className=" p-2 mt-4 w-full text-center bg-white "
                required
              />
            </div>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              style={{ width: 450, height: 100 }}
              placeholder="Коментарий к заказу"
              className="p-2 mt-4 w-full bg-white "
            ></textarea>
            <div className="flex items-center mt-4 gap-8">
              <p
                style={{ fontSize: 12, fontWeight: 400 }}
                className="font-circe"
              >
                Нажимая на кнопку, вы даете согласие с <br /> Политикой
                конфеденциальнолсти
              </p>
              <button
                disabled={isLoading}
                onClick={handleSubmit}
                className="bg-custom-red text-white font-circe"
              >
                {isLoading ? "Yuborilmoqda..." : "Отправить заявку"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
