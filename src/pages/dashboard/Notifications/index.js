import React from 'react';
import AppCard from '@xebia/core/AppCard';
import {useIntl} from 'react-intl';
import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {toggleNavCollapsed} from 'redux/actions';
// import MenuIcon from '@mui/icons-material/Menu';
import AppScrollbar from '@xebia/core/AppScrollbar';
import NotificationCell from './NotificationCell';
import AppList from '@xebia/core/AppList';
import PropTypes from 'prop-types';
// import {MenuList, MenuItem} from '@mui/material';
// import {useDispatch} from 'react-redux';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {alpha} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {HiOutlineViewBoards, HiRefresh} from 'react-icons/hi';
const Notifications = (props) => {
  // const dispatch = useDispatch();
  const {messages} = useIntl();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppCard
      contentStyle={{px: 0}}
      title={messages['tasks.myTasks']}
      action={
        <>
          <IconButton
            sx={{
              borderRadius: '50%',
              width: 40,
              height: 40,
              color: (theme) => theme.palette.text.secondary,
              backgroundColor: (theme) => theme.palette.background.default,
              border: 1,
              borderColor: 'transparent',
              '&:hover, &:focus': {
                color: (theme) => theme.palette.text.primary,
                backgroundColor: (theme) =>
                  alpha(theme.palette.background.default, 0.9),
                borderColor: (theme) =>
                  alpha(theme.palette.text.secondary, 0.25),
              },
            }}
            onClick={handleClick}
            size='large'
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              {' '}
              <HiOutlineViewBoards />
              &nbsp; View All
            </MenuItem>

            <MenuItem>
              {' '}
              <HiRefresh />&nbsp; Refresh
            </MenuItem>
          </Menu>
        </>
      }
    >
    
      <AppScrollbar
        sx={{
          maxHeight: 501,
        }}
      >
        <AppList
          data={props.notifications}
          renderRow={(item) => <NotificationCell key={item.id} item={item} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;

Notifications.propTypes = {
  notifications: PropTypes.array,
};
