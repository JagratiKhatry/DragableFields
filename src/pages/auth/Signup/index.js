import AppScrollbar from '@xebia/core/AppScrollbar';
import React from 'react';
import SignupFirebase from './Signup';
const Signup = ({setIsOpen}) => {
  return (
    <>
      <AppScrollbar
        sx={{
          maxHeight:'80vh'
        }}
      >
        <SignupFirebase setIsOpen={setIsOpen} />
      </AppScrollbar>
    </>
  );
};

export default Signup;
