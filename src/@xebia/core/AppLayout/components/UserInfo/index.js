import React from 'react';
import { useAuthMethod, useAuthUser } from '../../../../utility/AuthHooks';
import { alpha, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fonts, NavStyle } from 'shared/constants/AppEnums';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLayoutContext } from '@xebia/utility/AppContextProvider/LayoutContextProvider';
import IntlMessages from '@xebia/utility/IntlMessages';

const UserInfo = ({ color }) => {
  const { navStyle } = useLayoutContext();
  const { logout } = useAuthMethod();
  const { user } = useAuthUser();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userData = localStorage.getItem('data')
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const USER = JSON.parse(userData)
  const getUserAvatar = () => {
    if (USER?.result?.firstName) {
      return USER?.result?.firstName.charAt(0).toUpperCase();
    }
  };

  const firstName = USER?.result?.firstName?.charAt(0).toUpperCase() || ""
  const familyName = USER?.result?.familyName?.charAt(0).toUpperCase() || ""
  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          py: 3,
          px: navStyle === NavStyle.MINI ? 0 : 3,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        className='user-info-view'
      >
        <Box sx={{ py: 0.5 }}>

          <Avatar
            sx={{
              height: 40,
              width: 40,
              fontSize: 22,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, .80),
              marginLeft: '13px',
            }}
          >
            {firstName || 'A'}{familyName || 'U'}
          </Avatar>

        </Box>
        <Box
          sx={{
            width: { xs: 'calc(100% - 62px)', xl: 'calc(100% - 72px)' },
            ml: 4,
            color: color,
          }}
          className='user-info'
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                mb: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: 16,
                fontWeight: Fonts.MEDIUM,
                color: 'inherit',
              }}
              component='span'
            >
              {USER.result.firstName && USER.result.familyName ? USER.result.firstName + " " + USER.result.familyName : 'Admin User'}
            </Box>
            <Box
              sx={{
                ml: 3,
                color: 'inherit',
                display: 'flex',
              }}
            >
              <ExpandMoreIcon />
            </Box>
          </Box>
          {/* <Box
            sx={{
              mt: -0.5,
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              color: 'inherit',
            }}
          >
            System Manager
          </Box> */}
        </Box>
      </Box>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate('/my-profile');
          }}
        >
          <IntlMessages id='common.myaccount' />
        </MenuItem>
        <MenuItem onClick={logout}><IntlMessages id='common.logout' /></MenuItem>
      </Menu>
    </>
  );
};

export default UserInfo;

UserInfo.defaultProps = {
  color: 'text.secondary',
};

UserInfo.propTypes = {
  color: PropTypes.string,
};
