import {Button} from '@mui/material';
import React from 'react';

export const MuiButton = (props) => {
  const {label, startIcon, endIcon, onClick, ...others} = props;

  return (
    <Button
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...others}
    >
      {label}
    </Button>
  );
};
