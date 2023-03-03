import React from 'react';
import AppLogo from '@xebia/core/AppLayout/components/AppLogo';
import AppTooltip from '@xebia/core/AppTooltip';
import {
  alpha,
  AppBar,
  Box,
  Divider,
  Grid,
  Hidden,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppLngSwitcher from '@xebia/core/AppLngSwitcher';
import IntlMessages from '@xebia/utility/IntlMessages';
import {Fonts} from 'shared/constants/AppEnums';
import {useAuthUser} from '@xebia/utility/AuthHooks';
import {useNavigate} from 'react-router-dom';
import AppGridContainer from '@xebia/core/AppGridContainer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import { MuiButton } from 'pages/reactMuiControls/MuiButton';

const FontsToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    // margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const ModesToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    // margin: theme.spacing(0.5),
    height:'40px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius:'20px'
  },
}));

export const LandingHeader = ({isOpen, setIsOpen}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fontSize, setFontSize] = React.useState('dec');
  const [mode, setMode] = React.useState('light');
  const {isAuthenticated} = useAuthUser();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFontSizeChange = (e, value) => {
    console.log(value);
    setFontSize(value);
  };

  const handleModeChange = (e, value) => {
    console.log(value);
    setMode(value);
  };

  return (
    <AppBar
      color='inherit'
      sx={{
        boxShadow: 'none',
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        backgroundColor: 'background.paper',
        width: {
          xs: '100%',
        },
        zIndex: 1301,
      }}
      className='app-bar'
    >
      <Toolbar
        sx={{
          boxSizing: 'border-box',
          minHeight: {xs: 56, sm: 70},
          paddingLeft: {xs: 5},
          paddingRight: {xs: 5, md: 7.5, xl: 12.5},
        }}
      >
        <Box>
          <FontsToggleButtonGroup
            color='primary'
            value={fontSize}
            exclusive
            onChange={handleFontSizeChange}
            aria-label='Platform'
          >
            <ToggleButton value='dec'>
              A<KeyboardArrowDownIcon />
            </ToggleButton>
            <ToggleButton value='inc'>
              A<KeyboardArrowUpIcon />
            </ToggleButton>
          </FontsToggleButtonGroup>
        </Box>
        <Box sx={{flexGrow: 1}}></Box>
        <Stack direction={'row'} spacing={4}>
          <ModesToggleButtonGroup
            color='primary'
            value={mode}
            exclusive
            onChange={handleModeChange}
            aria-label='Platform'
            >
            <ToggleButton value='gray'><ContrastOutlinedIcon />Gray Mode</ToggleButton>
            <ToggleButton value='light'><LightModeOutlinedIcon />Light Mode</ToggleButton>
            <ToggleButton value='dark'><DarkModeOutlinedIcon />Dark Mode</ToggleButton>
          </ModesToggleButtonGroup>
          <AppLngSwitcher iconOnly={true} tooltipPosition='bottom' />
        </Stack>
      </Toolbar>
      <Divider />
      <Toolbar
        sx={{
          boxSizing: 'border-box',
          minHeight: {xs: 56, sm: 70},
          paddingLeft: {xs: 5},
          paddingRight: {xs: 5, md: 7.5, xl: 12.5},
        }}
      >
        {/* <Hidden lgUp>
                    <IconButton
                        sx={{ color: 'text.secondary' }}
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
                </Hidden> */}

        <Box onClick={() => setIsOpen(false)}>
          <AppLogo />
        </Box>
        <Box sx={{flexGrow: 1}}></Box>

        <Box sx={{ml: 4}}>
          <Hidden smDown>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                marginLeft: -2,
                marginRight: -2,
              }}
            >
              {/* {isAuthenticated ? (
                <Box sx={{px: 1.85}}>
                  <Link
                    sx={{
                      cursor: 'pointer',
                      textDecoration: 'none',
                      opacity: isOpen === 'sign-in' && '.5',
                      fontWeight: Fonts.SEMI_BOLD,
                      pointerEvents: isOpen === 'sign-in' && 'none',
                    }}
                    onClick={() => navigate('/dashboard')}
                  >
                    <IntlMessages id='common.backToDashboard' />
                  </Link>
                </Box>
              ) : ( */}
                <>
                  <Box sx={{px: 1.85}}>
                    <Link
                      sx={{
                        cursor: 'pointer',
                        textDecoration: 'none',
                        opacity: isOpen === 'sign-in' && '.5',
                        fontWeight: Fonts.SEMI_BOLD,
                        pointerEvents: isOpen === 'home' && 'none',
                      }}
                      onClick={() => navigate('/home')}
                    >
                      <IntlMessages id='common.home' />
                    </Link>
                  </Box>
                  <Box sx={{px: 1.85}}>
                    <Link
                      sx={{
                        cursor: 'pointer',
                        textDecoration: 'none',
                        opacity: isOpen === 'sign-in' && '.5',
                        fontWeight: Fonts.SEMI_BOLD,
                        pointerEvents: isOpen === 'service' && 'none',
                      }}
                      onClick={() => navigate('/service')}
                    >
                      <IntlMessages id='common.service' />
                    </Link>
                  </Box>
                  <Box sx={{px: 1.85}}>
                    <Link
                      sx={{
                        cursor: 'pointer',
                        textDecoration: 'none',
                        opacity: isOpen === 'sign-in' && '.5',
                        fontWeight: Fonts.SEMI_BOLD,
                        pointerEvents: isOpen === 'about-us' && 'none',
                      }}
                      onClick={() => navigate('/about-us')}
                    >
                      <IntlMessages id='common.about' />
                    </Link>
                  </Box>
                  <Box sx={{px: 1.85}}>
                    <Link
                      sx={{
                        cursor: 'pointer',
                        textDecoration: 'none',
                        opacity: isOpen === 'sign-up' && '.5',
                        fontWeight: Fonts.SEMI_BOLD,
                        pointerEvents: isOpen === 'contact-us' && 'none',
                        // color:
                      }}
                      onClick={() => navigate('/contact-us')}
                    >
                      {/* Login/Sign Up */}
                      <IntlMessages id='common.contact' />
                    </Link>
                  </Box>
                  <Box sx={{px: 1.85}}>
                    <MuiButton
                      sx={{
                        height:'40px'
                      }}
                      variant='outlined'
                      label='Login/Sign Up' // {<IntlMessages id='common.login' />}
                      onClick={() => setIsOpen('sign-in')}
                    />
                  </Box>
                </>
              {/* )} */}
            </Box>
          </Hidden>

          <Hidden smUp>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                marginLeft: -2,
                marginRight: -2,
              }}
            >
              <Box sx={{px: 1.85}}>
                <AppTooltip title='More'>
                  <IconButton
                    sx={{
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      color: (theme) => theme.palette.text.secondary,
                      backgroundColor: (theme) =>
                        theme.palette.background.default,
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
                </AppTooltip>
              </Box>
            </Box>
          </Hidden>
          {/* {isAuthenticated ? (
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{zIndex: 1302}}
            >
              <MenuItem>
                <Link
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    fontWeight: Fonts.SEMI_BOLD,
                    pointerEvents: isOpen === 'sign-in' && 'none',
                  }}
                  onClick={() => {
                    navigate('/dashboard');
                  }}
                >
                  <IntlMessages id='common.backToDashboard' />
                </Link>
              </MenuItem>
            </Menu>
          ) : ( */}
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{zIndex: 1302}}
            >
              <MenuItem disabled={isOpen === 'sign-in'}>
                <Link
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    fontWeight: Fonts.SEMI_BOLD,
                    pointerEvents: isOpen === 'sign-in' && 'none',
                  }}
                  onClick={() => {
                    setIsOpen('sign-in');
                  }}
                >
                  <IntlMessages id='common.signIn' />
                </Link>
              </MenuItem>
              <MenuItem disabled={isOpen === 'sign-up'}>
                <Link
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    fontWeight: Fonts.SEMI_BOLD,
                    pointerEvents: isOpen === 'sign-up' && 'none',
                  }}
                  onClick={() => {
                    setIsOpen('sign-up');
                  }}
                >
                  <IntlMessages id='common.signup' />
                </Link>
              </MenuItem>
            </Menu>
          {/* )} */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
