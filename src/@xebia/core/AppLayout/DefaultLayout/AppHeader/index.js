import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AppLngSwitcher from '@xebia/core/AppLngSwitcher';
import Box from '@mui/material/Box';
// import AppSearchBar from '@xebia/core/AppSearchBar';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import {toggleNavCollapsed} from 'redux/actions';
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from 'react-redux';
import AppLogo from '../../components/AppLogo';

const AppHeader = () => {

  const dispatch = useDispatch();

  return (
    <AppBar
      position='relative'
      color='inherit'
      sx={{
        boxShadow: 'none',
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        backgroundColor: 'background.paper',
        width: {
          xs: '100%',
        },
      }}
      className='app-bar'
    >
      <Toolbar
        sx={{
          boxSizing: 'border-box',
          minHeight: {xs: 56, sm: 70},
          paddingLeft: {xs: 1},
          paddingRight: {xs: 5, md: 5, xl: 5},
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
          <AppLogo />
        {/* <AppSearchBar iconPosition='right' placeholder='Search…' /> */}
        <Box
          sx={{
            flexGrow: 1,
          }}
        />
        <AppLngSwitcher iconOnly={true} tooltipPosition='bottom' />
      </Toolbar>
    </AppBar>
  );
};
export default AppHeader;
