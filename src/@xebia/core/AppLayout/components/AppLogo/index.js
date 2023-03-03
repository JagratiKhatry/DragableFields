import React from 'react';
// import {useThemeContext} from '../../../../utility/AppContextProvider/ThemeContextProvider';
import {Box} from '@mui/material';
// import {ReactComponent as Logo} from '../../../../../assets/icon/logo.svg';
// import {ReactComponent as LogoText} from '../../../../../assets/icon/logo_text.svg';

const AppLogo = () => {
  // const {theme} = useThemeContext();

  return (
    <Box
      sx={{
        height: {xs: 56, sm: 70},
        padding: 1.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'left',
        '& svg': {
          height: {xs: 40, sm: 45},
        },
      }}
      className='app-logo'
    >
      <img src='/assets/images/Swil-logo.png' width='28%' height='28%' />
      {/* <Logo fill={theme.palette.primary.main} />
      <Box
        sx={{
          mt: 1,
          display: {xs: 'none', md: 'block'},
          '& svg': {
            height: {xs: 25, sm: 30},
          },
        }}
      >
        <LogoText fill={alpha(theme.palette.text.primary, 0.8)} /> */}
      {/* </Box> */}
    </Box>
  );
};

export default AppLogo;
