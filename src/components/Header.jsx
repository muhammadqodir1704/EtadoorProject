import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '10px 0', gap: '100px' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Каталог дверей" LinkComponent={Link} to="/Katalog" />
        <Tab label="Погонаж" LinkComponent={Link} to="/pogonaj" />
        <Tab label="Фурнитура" LinkComponent={Link} to="/furnitura" />
        <Tab label="Где купить" LinkComponent={Link} to="/gde-kupit" />
        <Tab label="Сотрудничать" LinkComponent={Link} to="/sotrudnichat" />
        <Tab label="Наши работы" LinkComponent={Link} to="/o-kompanii" />
        <Tab label="Контакты" LinkComponent={Link} to="/kontakti" />
      </Tabs>
    </Box>
  );
}