import React, {useState} from 'react';
import {Alert, Snackbar} from '@mui/material';

export const MuiMessage = (props) => {
  const {
    open,
    autoHideDuration,
    severity,
    message,
    vertical = 'top',
    horizontal = 'right',
    transitionDirection = 'right',
  } = props;

  const [isOpen, setIsOpen] = useState(open);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      sx={{maxWidth: 400}}
      autoHideDuration={3000}
      open={isOpen}
      onClose={handleOnClose}
      anchorOrigin={{vertical: vertical, horizontal: horizontal}}
      // message={message}
      // TransitionComponent={<Slide direction={transitionDirection} />}
    >
      <Alert onClose={handleOnClose} severity={severity} sx={{width: '100%'}}>
        {message}
      </Alert>
    </Snackbar>
  );
};
