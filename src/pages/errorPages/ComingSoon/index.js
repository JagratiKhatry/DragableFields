import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { Fonts } from 'shared/constants/AppEnums';
import IntlMessages from '@xebia/utility/IntlMessages';
import { ReactComponent as Logo } from '../../../assets/icon/comingsoon.svg';
import { useTheme } from '@mui/material';
import AppInfoView from '@xebia/core/AppInfoView';
import AppAnimate from '@xebia/core/AppAnimate';





const ComingSoon = () => {
  const theme = useTheme();

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <>
        <Box
          sx={{
            my: { xl: 20, xs: 20 },
            py: { xl: 16, xs: 16 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              mb: { xs: 4, xl: 8 },
              width: '100%',
              maxWidth: { xs: 200, sm: 300, xl: 706 },
              '& svg': {
                width: '100%',
                maxWidth: 400,
              },
            }}
          >
            <Logo fill={theme.palette.primary.main} />
          </Box>

          <Box
            variant='h3'
            sx={{
              mb: { xs: 3, xl: 4 },
              fontSize: { xs: 20, md: 24 },
              fontWeight: Fonts.MEDIUM,
            }}
          >
            <IntlMessages id='error.comingSoon' />!
          </Box>

          <Box
            sx={{
              mb: { xs: 4, xl: 5 },
              color: grey[600],
            }}
          >
            <Typography style={{ fontSize: 18, marginTop: 3 }}>
              <IntlMessages id='error.comingSoonMessage1' />
            </Typography>
            <Typography style={{ fontSize: 18 }}>
              <IntlMessages id='error.comingSoonMessage2' />
            </Typography>
          </Box>
        </Box>
        <AppInfoView />
      </>
    </AppAnimate>
  );
};

export default ComingSoon;
