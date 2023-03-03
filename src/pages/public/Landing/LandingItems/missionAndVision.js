import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import IntlMessages from '@xebia/utility/IntlMessages';
import {Fonts} from 'shared/constants/AppEnums';

export const MissionAndVision = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ededed',
        backgroundImage: "url('/assets/images/public/Image 4.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '527px',
        width: '100%',
      }}
    >
      <Box sx={{textAlign: 'center'}} py={25} px={50}>
        <Typography
          component={'span'}
          sx={{
            fontSize: 40,
            fontWeight: Fonts.BOLD,
            color: 'white',
          }}
        >
          {<IntlMessages id='landing.mission' />}{' '}
          <Typography
            variant={'span'}
            sx={{color: (theme) => theme.palette.primary.main}}
          >
            {<IntlMessages id='landing.vision' />}
          </Typography>
        </Typography>
        <Typography
          sx={{
            my: 4,
            fontSize: 20,
            color: 'white',
          }}
          px='10%'
        >
          {<IntlMessages id='landing.missionAndVisionDesc' />}
        </Typography>
        <Box sx={{py: 10, width: '100%', margin: 'auto'}}>
          {/* <Stack spacing={4} direction='row'  sx={{width: '100%', margin: 'auto'}}> */}
          <Button
            color='primary'
            variant='contained'
            sx={{
              width: '20%',
              height: '60px',
              backgroundColor: 'white',
              color: (theme) => theme.palette.primary.main,
            }}
          >
            Read more
            {/* <IntlMessages id='landing.createAccount' /> */}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
