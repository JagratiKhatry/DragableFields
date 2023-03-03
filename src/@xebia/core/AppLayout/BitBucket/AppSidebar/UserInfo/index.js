import React from 'react';
import { useAuthMethod, useAuthUser } from '../../../../../utility/AuthHooks';
import { Box, alpha } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Fonts } from 'shared/constants/AppEnums';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IntlMessages from '@xebia/utility/IntlMessages';

const UserInfo = () => {
  const { logout } = useAuthMethod();
  const { user } = useAuthUser();
  const userData = useSelector(({ auth }) => auth.userData)

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  return (
    <Box
      sx={{
        py: 3,
        px: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <Box onClick={handleClick}>
        {user.photoURL ? (
          <Avatar
            sx={{
              height: 30,
              width: 30,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, .80),
            }}
            src={user.photoURL}
          />
        ) : (
          <Avatar
            sx={{
              height: 30,
              width: 30,
              fontSize: 20,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, .80),
            }}
          >
            {getUserAvatar()}
          </Avatar>
        )}
      </Box>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          py: 4,
        }}
      >
        <MenuItem
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.common.black, 0.08),
            px: 6,
            py: 3,
          }}
        >
          <Box
            sx={{
              mr: 3.5,
            }}
          >
            {user.photoURL ? (
              <Avatar
                sx={{
                  height: 40,
                  width: 40,
                }}
                src={user.photoURL}
              />
            ) : (
              <Avatar
                sx={{
                  height: 40,
                  width: 40,
                  fontSize: 20,
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, .80),
                }}
              >
                {getUserAvatar()}
              </Avatar>
            )}
          </Box>

          <Box>
            <Box
              sx={{
                mb: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: 14,
                fontWeight: Fonts.MEDIUM,
              }}
              component='span'
            >
              {user.displayName ? user.displayName : 'Admin User '}
            </Box>
            {/* <Box
              sx={{
                mt: -0.5,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: 12,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              System Manager
            </Box> */}
          </Box>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate('/my-profile');
          }}
          sx={{
            px: 6,
            py: 1.5,
          }}
        >
          <IntlMessages id='common.myaccount' />
        </MenuItem>
        <MenuItem
          sx={{
            px: 6,
            py: 1.5,
          }}
          onClick={logout}
        >
          <IntlMessages id='common.logout' />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserInfo;