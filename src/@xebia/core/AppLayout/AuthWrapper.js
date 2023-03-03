import React, {useState} from 'react';
import Box from '@mui/material/Box';
import PropsTypes from 'prop-types';
import {LandingHeader} from 'pages/public/Landing/LandingHeader';
import AppDialog from '../AppDialog';
import Signin from 'pages/auth/Signin';
import Signup from 'pages/auth/Signup';
import ForgetPassword from 'pages/auth/ForgetPassword';
import {LandingFooter} from 'pages/public/Landing/LandingFooter';

const AuthWrapper = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LandingHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          position: 'relative',
          minWidth: '100%',
          backgroundColor: (theme) => theme.palette.background.default,

          '& .app-content-view': {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          },
          '& .footer': {
            marginRight: 0,
            marginLeft: 0,
          },
        }}
        pt={35}
      >
        {children}
      </Box>
      <LandingFooter />

      <AppDialog
        open={!!isOpen}
        PaperProps={{
          style: {
            minWidth: '70%',
            maxHeight: '80%',
            marginTop: '4%',
          },
        }}
        sxStyle={{marginTop: '4%'}}
        onClose={() => setIsOpen(false)}
      >
        {isOpen === 'sign-in' && <Signin setIsOpen={setIsOpen} />}
        {isOpen === 'sign-up' && <Signup setIsOpen={setIsOpen} />}
        {isOpen === 'forgot-password' && (
          <ForgetPassword setIsOpen={setIsOpen} />
        )}
      </AppDialog>
    </>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropsTypes.node,
};
