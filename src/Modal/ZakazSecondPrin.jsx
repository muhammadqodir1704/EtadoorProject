import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GiConfirmed } from "react-icons/gi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  height: 214,
  bgcolor: "#E5E5E5",
  boxShadow: 24,
  p: 4,
};

export default function ZakazSecondPrin({ open, onClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="text-center text-custom-red font-noto-sans-georgian flex items-center justify-center gap-4"
            style={{ fontSize: 34, fontWeight: 700 }}
            id="modal-modal-title"
            variant="h6"
          >
            Ваш заказ принят{" "} <GiConfirmed style={{ fontSize:38 ,color: '#199719' }}/>

          </Typography>
          <Typography
            className="text-center text-custom-black mt-16 "
            style={{ fontSize: 20, fontWeight: 400 }}
            id="modal-modal-description"
          > 
          В ближайшее время мы с вами свяжемся
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
