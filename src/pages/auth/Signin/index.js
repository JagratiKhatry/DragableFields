import React from 'react';
import SigninFirebase from './Signin';
import AppScrollbar from '@xebia/core/AppScrollbar';
const Signin = ({setIsOpen}) => {
  return (
    <>
      <AppScrollbar
        sx={{
          maxHeight: '80vh',
        }}
      >
        <SigninFirebase setIsOpen={setIsOpen} />
      </AppScrollbar>
    </>
  );
};

export default Signin;
