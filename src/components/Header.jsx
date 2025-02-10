import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Menu, MenuItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Каталог дверей", link: "/katalog", submenu: [] },
  { label: "Погонаж", link: "/pogonaj", submenu: [] },
  { label: "Фурнитура", link: "/furnitura", submenu: [] },
  { label: "Где купить", link: "/gde-kupit", submenu: [] },
  { label: "Сотрудничать", link: "/sotrudnichat", submenu: [] },
  { label: "Наши работы", link: "/o-kompanii", submenu: [] },
  { label: "Контакты", link: "/kontakti", submenu: [] },
];

export default function Header() {
  const location = useLocation();
  const [value, setValue] = useState(-1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    console.log("Current path:", location.pathname);
    const currentIndex = menuItems.findIndex(
      (item) => item.link === location.pathname
    );
    setValue(currentIndex !== -1 ? currentIndex : -1);
  }, [location.pathname, location.key]);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event, index) => {
    if (menuItems[index]?.submenu?.length > 0) {
      setAnchorEl(event.currentTarget);
      setSelectedTab(index);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTab(null);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          "& .MuiTabs-indicator": { display: "none" },
          "& .MuiTab-root": {
            fontWeight: "bold",
            color: "#333",
            textTransform: "none",
            transition: "background 0.3s",
            "&.Mui-selected": {
              backgroundColor: "#FF705D",
              color: "#fff",
              borderRadius: "5px",
            },
          },
        }}>
        {menuItems.map((item, index) => (
          <Tab
            key={index}
            label={item.label}
            component={Link}
            to={item.link}
            onMouseEnter={(e) => handleMenuOpen(e, index)}
          />
        ))}
      </Tabs>

      {selectedTab !== null && menuItems[selectedTab]?.submenu?.length > 0 && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}>
          {menuItems[selectedTab]?.submenu?.map((sub, i) => (
            <MenuItem key={i} onClick={handleMenuClose}>
              {sub}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}
