import React from 'react';
import Grid from '@mui/material/Grid';
import {Box, Button, Typography} from '@mui/material';
import AppGridContainer from '@xebia/core/AppGridContainer';
import IntlMessages from '@xebia/utility/IntlMessages';

export const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.contrastText,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // padding: '100px 0px',
        height: '700px',
      }}
    >
      <Box maxWidth={'xl'}>
        <AppGridContainer spacing={4}>
          <Grid item xs={6} md={6}>
            <Box p={20}>
              <Typography sx={{mb: 5}} fontSize={70} variant='h1'>
                <IntlMessages id='landing.socialWorkerHeadingp1' />{' '}
                <Typography
                  variant={'span'}
                  sx={{color: (theme) => theme.palette.primary.main}}
                >
                  {<IntlMessages id='landing.socialWorkerHeadingp2' />}
                </Typography>
              </Typography>
              <Typography component='h4' variant='body1'>
                <IntlMessages id='landing.socialWorkerHeadingDesc' />
              </Typography>
              <Box display={'flex'} sx={{mt: 15}}>
                <Button
                  color='primary'
                  variant='contained'
                  sx={{width: '50%', height: '60px'}}
                >
                  <IntlMessages id='landing.createAccount' />
                </Button>
                <Button
                  color='primary'
                  variant='text'
                  sx={{width: '50%', height: '60px'}}
                >
                  <IntlMessages id='landing.browseServices' />
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <img src='/assets/images/public/Image 1.png' />
          </Grid>
        </AppGridContainer>
      </Box>
    </Box>
  );
};
