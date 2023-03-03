import {ButtonGroup} from '@mui/material';
import React from 'react';

export const MuiButtonGroup = (props) => {
  const {orientation, ...others} = props;
  return (
    <ButtonGroup
      sx={{justifyContent: 'center'}}
      aria-label='button group'
      orientation={orientation}
      disableElevation
      {...others}
    >
      {props.children}
    </ButtonGroup>
  );
};
