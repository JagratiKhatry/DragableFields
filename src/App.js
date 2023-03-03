import React from 'react';
import {Provider} from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import AuthRoutes from '@xebia/utility/AuthRoutes';
import AppContextProvider from '@xebia/utility/AppContextProvider';
import AppThemeProvider from '@xebia/utility/AppThemeProvider';
import AppStyleProvider from '@xebia/utility/AppStyleProvider';
import AppLocaleProvider from '@xebia/utility/AppLocaleProvider';
import AppLayout from '@xebia/core/AppLayout';
import configureStore, {history} from 'redux/store';
import {BrowserRouter} from 'react-router-dom';
import JWTAuthAuthProvider from '@xebia/services/auth/jwt-auth/JWTAuthProvider';

const store = configureStore();

const App = () => (
  <AppContextProvider>
    <Provider store={store}>
      <AppThemeProvider>
        <AppStyleProvider>
          <AppLocaleProvider>
            <BrowserRouter history={history}>
              <JWTAuthAuthProvider>
                <AuthRoutes>
                  <CssBaseline />
                  <AppLayout />
                </AuthRoutes>
              </JWTAuthAuthProvider>
            </BrowserRouter>
          </AppLocaleProvider>
        </AppStyleProvider>
      </AppThemeProvider>
    </Provider>
  </AppContextProvider>
);

export default App;
