import React, {useState} from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from '@mui/material';

export const MuiDialog = (props) => {
  const {dialogTitle, dialogContentText, open = false, dialogActions} = props;

  const [isOpen, setIsOpen] = useState(open);

  const handleOnClose = () => {
    setIsOpen(false);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleOnClose}
      aria-describedby='alert-dialog-description'
      aria-labelledby='dialog-title'
      // TransitionComponent={<Slide direction={slideDirection} />}
    >
      <DialogTitle id='dialog-title'>{dialogTitle}</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {dialogContentText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {dialogActions.map((action, i) => (
          <Button key={action.id} onClick={handleOnClose}>
            {action.title}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};
