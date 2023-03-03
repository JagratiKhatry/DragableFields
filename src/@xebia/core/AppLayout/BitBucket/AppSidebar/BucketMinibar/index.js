import React from 'react';
import BucketMinibarWrapper from './BucketMinibarWrapper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
//import SearchIcon from '@mui/icons-material/Search';
import AppLngSwitcher from '../../../../AppLngSwitcher';
import {useThemeContext} from '../../../../../utility/AppContextProvider/ThemeContextProvider';
import UserInfo from '../UserInfo';
import {ReactComponent as Logo} from '../../../../../../assets/icon/logo.svg';

const BucketMinibar = () => {
  const {theme} = useThemeContext();

  return (
    <BucketMinibarWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 1.5,
        }}
      >
        <IconButton
          sx={{
            flexDirection: 'column',
            color: 'white',
            mb: 2.5,
          }}
          aria-label='show 17 new notifications'
        >
          <Logo fill={theme.palette.primary.main} />
        </IconButton>
        <AppLngSwitcher iconOnly={true} tooltipPosition='right' />

      </Box>
      <Box
        sx={{
          mt: 'auto',
        }}
      >
        <UserInfo />
      </Box>
    </BucketMinibarWrapper>
  );
};

export default BucketMinibar;
