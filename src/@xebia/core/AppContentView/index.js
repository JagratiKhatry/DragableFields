import React from 'react';
import AppErrorBoundary from '../AppErrorBoundary';
import {useAuthUser} from '../../utility/AuthHooks';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import AppContentViewWrapper from './AppContentViewWrapper';
import AppSuspense from '../AppSuspense';
import generateRoutes from '../../utility/RouteGenerator';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
  publicStructure,
} from '../../../pages';

const AppContentView = ({sxStyle}) => {
  const {user, isAuthenticated} = useAuthUser();

  return (
    <AppContentViewWrapper>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          p: isAuthenticated && {xs: 5, md: 7.5, xl: 12.5},
          ...sxStyle,
        }}
        className='app-content'
      >
        <AppSuspense>
          <AppErrorBoundary>
            {generateRoutes({
              isAuthenticated: isAuthenticated,
              userRole: user?.roleType,
              unAuthorizedStructure,
              authorizedStructure,
              anonymousStructure,
              publicStructure,
            })}
            
          </AppErrorBoundary>
        </AppSuspense>
      </Box>
    </AppContentViewWrapper>
  );
};

export default AppContentView;

AppContentView.propTypes = {
  sxStyle: PropTypes.object,
};
