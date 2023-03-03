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
import PropTypes from 'prop-types';
import AppLogo from '../../components/AppLogo';

const AppHeader = (props) => {
  const {isCollapsed, setCollapsed} = props;
  const dispatch = useDispatch();

  return (
    <AppBar
      position='relative'
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
          paddingLeft: {xs: 5},
          paddingRight: {xs: 5, md: 5},
        }}
      >
        <Hidden lgDown>
          <IconButton
            sx={{color: 'text.secondary'}}
            edge='start'
            className='menu-btn'
            color='inherit'
            aria-label='open drawer'
            onClick={() => setCollapsed(!isCollapsed)}
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
      </Toolbar>
    </AppBar>
  );
};
export default AppHeader;

AppHeader.propTypes = {
  isCollapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};
