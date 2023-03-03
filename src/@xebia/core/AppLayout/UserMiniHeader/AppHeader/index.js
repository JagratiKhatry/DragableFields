import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AppLngSwitcher from '@xebia/core/AppLngSwitcher';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import {toggleNavCollapsed} from 'redux/actions';
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from 'react-redux';
import AppLogo from '../../components/AppLogo';
import UserInfo from '../../components/UserInfo';

const AppHeader = () => {
  const dispatch = useDispatch();

  return (
    <AppBar
      color='inherit'
      sx={{
        boxShadow: 'none',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: 'background.paper',
        transition: 'width 0.5s ease',
        width: '100%',
      }}
      className='app-bar'
    >
      <Toolbar
        sx={{
          boxSizing: 'border-box',
          minHeight: {xs: 56, sm: 70},
          paddingLeft: {xs: 2.5, md: 2.5},
          paddingRight: {xs: 2.5, md:2.5},
        }}
      >
        <Hidden lgUp>
          <IconButton
            sx={{color: 'text.secondary'}}
            edge='start'
            className='menu-btn'
            color='inherit'
            aria-label='open drawer'
            onClick={() => dispatch(toggleNavCollapsed())}
            size='large'
          >
            <MenuIcon
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
        </Hidden>
        <Box
          sx={{
            '& .logo-text': {
              display: {xs: 'none', sm: 'block'},
            },
          }}
        >
          <AppLogo />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
          }}
        />

        <Box sx={{ml: 4}}>
          <AppLngSwitcher iconOnly={true} tooltipPosition='bottom' />
        </Box>

        <Box
          sx={{
            ml: 4,
            display: 'flex',
            alignItems: 'center',
          }}
        >

          <Box
            sx={{
              minWidth: {md: 220},
              '& .user-info-view': {
                p: 0,
              },
              '& .user-info': {
                display: {xs: 'none', md: 'block'},
              },
            }}
          >
            <UserInfo />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default AppHeader;
