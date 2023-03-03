import {Typography} from '@mui/material';
import IntlMessages from '@xebia/utility/IntlMessages';
import React from 'react';
import {Fonts} from 'shared/constants/AppEnums';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export const MuiLabelValue = ({type, label, value, options = []}) => {
  const getValue = () => {
    switch (type) {
      case 'dropdown':
        return (
          <Typography sx={{fontSize: 12}}>
            {options.find((option) => option.id === value).title}
          </Typography>
        );
      case 'document':
        return (
          <Typography
            sx={{
              fontSize: 16,
              display: 'flex',
              color: (theme) => theme.palette.primary.main,
            }}
          >
            <AttachFileIcon
              sx={{
                transform: 'rotate(45deg)',
                color: 'black',
                width: '20px',
              }}
            />
            {value}
          </Typography>
        );
      default:
        return <Typography sx={{fontSize: 12}}>{value}</Typography>;
    }
  };

  return (
    <>
      <Typography sx={{fontSize: 16, fontWeight: Fonts.MEDIUM}}>
        {<IntlMessages id={label} />}
      </Typography>
      {getValue()}
    </>
  );
};
