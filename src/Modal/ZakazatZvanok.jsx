import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function ZakazatZvanok({ open, handleClose }) {
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
            Заказать звонок{" "}
          </Typography>
          <Typography
            className="text-center text-custom-black"
            style={{ fontSize: 18, fontWeight: 400 }}
            id="modal-modal-description"
          >
            Оставьте свои контакты <br /> и мы перезвоним вам, в ближайшее время{" "}
          </Typography>
          <div className="mt-3 flex flex-col items-center">
            <input
              style={{ width: 450, height: 45 }}
              type="text"
              placeholder="Ваше имя"
              className=" p-2 mt-4 w-full text-center bg-white "
            />
              <input
                style={{ width: 450, height: 45 }}
                type="text"
                placeholder="Телефон*"
                className=" p-2 mt-4 w-full text-center bg-white "
              />
            <div className="flex items-center mt-4 gap-8">
              <p
                style={{ fontSize: 12, fontWeight: 400 }}
                className="font-circe"
              >
                Нажимая на кнопку, вы даете согласие с <br /> Политикой
                конфеденциальнолсти
              </p>
              <button
                className="bg-custom-red text-white font-circe"
                style={{
                  width: 182,
                  height: 39,
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Отправить заявку
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
