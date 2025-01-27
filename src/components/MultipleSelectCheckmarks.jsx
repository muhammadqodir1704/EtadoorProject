import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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

const MultipleSelectCheckmarks = () => {
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [names, setNames] = useState([]);

  const tagOptions = ['Tag 1', 'Tag 2', 'Tag 3'];
  const categoryOptions = ['Category 1', 'Category 2', 'Category 3'];
  const nameOptions = ['Oliver', 'Henry', 'April'];

  const handleChange = (setter) => (event) => {
    const {
      target: { value },
    } = event;
    setter(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      {/* Select for Tags */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="tags-select-label">Tags</InputLabel>
        <Select
          labelId="tags-select-label"
          multiple
          value={tags}
          onChange={handleChange(setTags)}
          input={<OutlinedInput label="Tags" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {tagOptions.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={tags.includes(option)} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Select for Categories */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="categories-select-label">Categories</InputLabel>
        <Select
          labelId="categories-select-label"
          multiple
          value={categories}
          onChange={handleChange(setCategories)}
          input={<OutlinedInput label="Categories" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {categoryOptions.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={categories.includes(option)} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Select for Names */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="names-select-label">Names</InputLabel>
        <Select
          labelId="names-select-label"
          multiple
          value={names}
          onChange={handleChange(setNames)}
          input={<OutlinedInput label="Names" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {nameOptions.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={names.includes(option)} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectCheckmarks;
