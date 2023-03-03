import React from 'react';
import Box from '@mui/material/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Fonts} from 'shared/constants/AppEnums';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { HiSelector } from 'react-icons/hi';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
const NotificationCell = ({item}) => {

  const checkSeverity = (data) => {
    switch (data) {
      case 'informational':
          return '#FEF1E4'
        case 'warning':
          return '#DDEFFA'
        case 'critical':
         return '#FFE3EE'
        case 'success':
          return '#E2F3E8'
      default:
         return '#FEE7E6'
    }
  } 

  return (
    <ListItem
      disableGutters
      className='item-hover'
      sx={{paddingLeft: 5, paddingRight: 5}}
    >
      {/* <Box
        sx={{
          minWidth: 'auto',
          mr: 4,
        }}
      >

        <FiberManualRecordIcon sx={{color: checkSeverity(item?.severity)}}/>
      </Box> */}
      <Box
        sx={{
          mr: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          width: 80,
          textAlign: 'center',
          height: 60,
          backgroundColor: checkSeverity(item?.severity),
          color: item.color,
          borderRadius: 1,
        }}
      >
        <ManageAccountsIcon  />
      </Box>
      <ListItemText
        primary={
          <Box
          component='span'
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            fontSize: 14,
            color: 'primary.main',
          }}
        >
          <Box
            component='span'
            sx={{
              color: 'text.primary',
              mb: 0.5,
              fontWeight: Fonts.MEDIUM,
              fontSize: 14,
            }}
          >
            {item.type}
          </Box>
          <Box
          sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ml: 'auto',
        }}
      >
        <Box component='p'>{item.date}</Box>
      </Box>
          </Box>
        }
        secondary={
          <Box
            component='span'
            sx={{
              // display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              fontSize: 14,
              color: 'primary.main',
            }}
          >
            <Box
              component='span'
              sx={{
                display: 'block',
                mr: 2,
              }}
            >
              {item.name} 
            </Box>
          
            <Box
              component='span'
              sx={{
                display: 'block',
                color: 'text.secondary',
              }}
            >
              {item.message}
            </Box>
          </Box>
        }
      />
    </ListItem>


  );
};

export default NotificationCell;

NotificationCell.propTypes = {
  item: PropTypes.object.isRequired,
};
