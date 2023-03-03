import AppScrollbar from '@xebia/core/AppScrollbar';
import React from 'react';
import ForgetPasswordJwtAuth from './ForgetPasswordJwtAuth';

const ForgetPassword = ({setIsOpen}) => {
  return (
    <>
      <AppScrollbar
        sx={{
          maxHeight:'80vh'
        }}
      >
        <ForgetPasswordJwtAuth setIsOpen={setIsOpen} />
      </AppScrollbar>
    </>
  );
};

export default ForgetPassword;
