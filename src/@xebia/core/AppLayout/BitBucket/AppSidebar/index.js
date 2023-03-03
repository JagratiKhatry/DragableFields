import React from 'react';
import {toggleNavCollapsed} from 'redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../AppScrollbar';
import MainSidebar from '../../components/MainSidebar';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import VerticalNav from '../../components/VerticalNav';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BitBucketSidebarWrapper from './BitBucketSidebarWrapper';
import AppSidebarContainer from './AppSidebarContainer';
import BucketMinibar from './BucketMinibar';
import {Typography} from '@mui/material';
import {Fonts} from 'shared/constants/AppEnums';
import AppLogo from '../../components/AppLogo';

const AppSidebar = (props) => {
  const {isCollapsed, setCollapsed} = props;

  const dispatch = useDispatch();
  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };

  const sideBarComponent = () => {
    return (
      <BitBucketSidebarWrapper className='bit-bucket-sidebar'>
        <Box className='bit-bucket-sidebar-fixed'>
          <Box
            className='bit-bucket-btn'
            onClick={() => setCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
          </Box>
          <BucketMinibar />
          <AppSidebarContainer className='app-sidebar-container'>
            <MainSidebar>
              <Box
                sx={{
                  py: 4.5,
                  px: 7.5,
                }}
              >
              <img src='/assets/images/Swil-logo.png' width='58%' height='28%' />
              </Box>
              <AppScrollbar
                sx={{
                  py: 2,
                  height: 'calc(100vh - 70px) !important',
                }}
                scrollToTop={false}
              >
                <VerticalNav />
              </AppScrollbar>
            </MainSidebar>
          </AppSidebarContainer>
        </Box>
      </BitBucketSidebarWrapper>
    );
  };
  return (
    <>
      <Hidden xlUp>
        <Drawer
          anchor={props.position}
          open={navCollapsed}
          onClose={() => handleToggleDrawer()}
          classes={{
            root: clsx(props.variant),
            paper: clsx(props.variant),
          }}
          style={{position: 'absolute'}}
        >
          {sideBarComponent()}
        </Drawer>
      </Hidden>
      <Hidden lgDown>{sideBarComponent()}</Hidden>
    </>
  );
};
export default AppSidebar;

AppSidebar.defaultProps = {
  variant: '',
  position: 'left',
};

AppSidebar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
  isCollapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};