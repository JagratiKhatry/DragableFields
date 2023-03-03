import React, {useState} from 'react';
import {Rating, Stack} from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const MuiRating = (props) => {
  const {
    defaultRating = 3,
    icon,
    precision = 0.5,
    emptyIcon,
    handleChange,
  } = props;

  const [value, setValue] = useState(defaultRating);

  const handleOnChange = ($event, newValue) => {
    setValue(newValue);
    !!handleChange && handleChange(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleOnChange}
        precision={precision}
        size='small'
        icon={icon || <FavoriteOutlinedIcon />}
        emptyIcon={emptyIcon || <FavoriteBorderOutlinedIcon />}
        readOnly={props?.readOnly}
        // highlightSelectedOnly  // useful when taking feedback through emojis etc.
      />
    </Stack>
  );
};
