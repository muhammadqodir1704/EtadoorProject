import ChoosenImg from "../Images/ChosenImg.svg";
import Strelka from "../Images/Strelka.svg";

// material ui select
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "300px", // Input kengligi
          backgroundColor: "#fff", // Oq fon
          borderRadius: "8px", // Dumaloqlashtirish
        },
      },
    },
  },
});

const Filter = () => {
  const [firstSelect, setFirstSelect] = React.useState([]);
  const [secondSelect, setSecondSelect] = React.useState([]);
  const [fourthSelect, setFourthSelect] = React.useState([]);
  const [fifthSelect, setFifthSelect] = React.useState([]);
  const [sixthSelect, setSixthSelect] = React.useState([]);
  const GdeBudet = [
    "Производство или складское помещение",
    "Жилой дом или квартира ",
    "April Tucker",
    "Ресторан, кафе, бистро",
    "Аэропорт, авто/железнодорожный вокзал",
    "Офис или бизнес центр",
  ];
  const TipDveri = [
    "Одностворчатая",
    "Двухстворчатая",
    "Маятниковая",
    "Раздвижная",
  ]
  const Akno = [
    "Нет",
    "С окном",
    "С иллюминатором",
    "С передаточным окном"
  ]
  const Karobka = [
    "Маятниковая ALU",
    "Маятниковая деревянная",
    "ALU",
    "ДПК",
    "Нет,",
  ]
  const Furnitura = [
    "Да",
    "Нет",
  ]

  const handleChange = (setter) => (event) => {
    const {
      target: { value },
    } = event;
    setter(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <div className="container mx-auto p-6 min-h-screen rounded-lg">
        <h2
          style={{ fontSize: 34, fontWeight: 700 }}
          className=" text-center mb-8 font-noto-sans-georgian"
        >
          Подберите свою дверь
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 mb-8 ">
          {/* First Select Option  */}
          <FormControl sx={{ m: 1, width: 450, height: 45 }}>
            <InputLabel id="tags-select-label">Где будет использоваться</InputLabel>
            <Select
              labelId="tags-select-label"
              multiple
              value={firstSelect}
              onChange={handleChange(setFirstSelect)}
              input={<OutlinedInput label="Где будет использоваться" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {GdeBudet.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={firstSelect.includes(option)} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Second Select Option */}
          <FormControl sx={{ m: 1, width: 450, height: 45 }}>
            <InputLabel id="categories-select-label">Тип двери</InputLabel>
            <Select
              labelId="categories-select-label"
              multiple
              value={secondSelect}
              onChange={handleChange(setSecondSelect)}
              input={<OutlinedInput label="Тип двери" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {TipDveri.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={secondSelect.includes(option)} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* Third Select Option */}
          <ThemeProvider style={{ m: 1, width: 450, height: 45 }} theme={theme}>
            <TextField
              label="Количество"
              type="number"
              InputLabelProps={{
                shrink: true, // Labelni kichraytirish
              }}
              variant="outlined"
            />
          </ThemeProvider>
          {/* Fourth Select Option */}
          <FormControl sx={{ m: 1, width: 450, height: 45 }}>
            <InputLabel id="categories-select-label">Окно</InputLabel>
            <Select
              labelId="categories-select-label"
              multiple
              value={fourthSelect}
              onChange={handleChange(setFourthSelect)}
              input={<OutlinedInput label="Окно" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={
                {
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null, // Anchordan foydalanishni o'chirish
                }
              }
            >
              {Akno.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={fourthSelect.includes(option)} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 450, height: 45 }}>
            <InputLabel id="categories-select-label">Коробка</InputLabel>
            <Select
              labelId="categories-select-label"
              multiple
              value={sixthSelect}
              onChange={handleChange(setSixthSelect)}
              input={<OutlinedInput label="Коробка" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={
                {
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null, // Anchordan foydalanishni o'chirish
                }
              }
            >
              {Karobka.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={fifthSelect.includes(option)} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 450, height: 45 }}>
            <InputLabel id="categories-select-label">Фурнитура</InputLabel>
            <Select
              labelId="categories-select-label"
              multiple
              value={fifthSelect}
              onChange={handleChange(setFifthSelect)}
              input={<OutlinedInput label="Фурнитура" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={
                {
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null, // Anchordan foydalanishni o'chirish
                }
              }
            >
              {Furnitura.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox checked={fifthSelect.includes(option)} />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </div>
        <div
          style={{ gap: 50, position: "relative" }}
          className=" mb-8 flex justify-center"
        >
          <div>
            <img style={{ width: 375, height: 375 }} src={ChoosenImg} alt="" />
          </div>
          <div className="mb-8">
            <p className="text-lg font-medium mb-4">ЦВЕТ полотна</p>
            <div className="flex gap-4 items-center mr-6">
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
              <button
                style={{ width: 80, height: 80 }}
                className=" bg-red-400 rounded-full border-2 border-gray-300"
              ></button>
            </div>

            <div style={{ width: 826, height: 130 }} className="mb-8">
              <p className="text-lg font-medium mb-4">РАЗМЕР полотна</p>
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  200x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  300x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  400x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  500x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  600x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  700x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  800x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  900x2000 мм
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  Нестандартный
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div style={{ width: 1052, height: 152 }}>
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Телефон"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <textarea
              placeholder="Комментарий"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows="4"
            ></textarea>
            <div className="flex justify-center">
              <button
                style={{ width: 302, height: 65, fontSize: 32 }}
                className=" py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
