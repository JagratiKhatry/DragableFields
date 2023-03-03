// import {authRouteConfig} from './auth';
import {
  authorizedInitialUrl,
  unauthorizedInitialUrl,
} from 'shared/constants/AppConst';
import {Navigate} from 'react-router-dom';
import React from 'react';
import {errorPagesConfigs} from './errorPages';
import {mainPages} from './dashboard';
import {accountPages} from './account';
import Error404 from './errorPages/Error404';
import {otherPages} from './modules';
import {publicRouteConfig} from './public';

const authorizedStructure = {
  fallbackPath: authorizedInitialUrl,
  unAuthorizedComponent: <Error404 />,
  routes: [
    ...mainPages,
    ...accountPages,
    ...otherPages,
    {
      path: '/',
      element: <Navigate to={authorizedInitialUrl} />,
    },
    {
      path: '*',
      element: <Navigate to={authorizedInitialUrl} />,
    },
  ],
};

const unAuthorizedStructure = {
  fallbackPath: unauthorizedInitialUrl,
  routes: [
    {
      path: '/',
      element: <Navigate to={unauthorizedInitialUrl} />,
    },
    {
      path: '*',
      element: <Navigate to={unauthorizedInitialUrl} />,
    },
  ],
};

const anonymousStructure = {
  routes: errorPagesConfigs,
};

const publicStructure = {
  routes: publicRouteConfig,
};

export {
  authorizedStructure,
  unAuthorizedStructure,
  anonymousStructure,
  publicStructure,
};
