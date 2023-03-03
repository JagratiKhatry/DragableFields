import React, {useEffect, useState} from 'react';

import Grid from '@mui/material/Grid';
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import AppGridContainer from '@xebia/core/AppGridContainer';
import Services from './Services';
import IntlMessages from '@xebia/utility/IntlMessages';
import enMessages from '../../../../shared/localization/locales/en_US.json';
import {Banner} from './banner';
import {Fonts} from 'shared/constants/AppEnums';
import AppCard from '@xebia/core/AppCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {APIServices} from 'pages/modules/Services';
import {Service} from './service';

export const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        // backgroundImage: "url('/assets/images/bgImsge.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'569px',
      }}
    >
      <AppGridContainer>
        <Grid item sx={6} md={6}>
          <img src='/assets/images/public/Image 3.png' />
        </Grid>
        <Grid item sx={6} md={6}>
          <Box p={5}>
            <Typography
              component={'span'}
              sx={{
                fontSize: 40,
                fontWeight: Fonts.BOLD,
                // color: 'white',
              }}
            >
              About{' '}
              {/* {<IntlMessages id='services.our' />} */}
              <Typography
                variant={'span'}
                sx={{color: (theme) => theme.palette.primary.main}}
              >Us
                {/* {<IntlMessages id='services.services' />} */}
              </Typography>
            </Typography>
            <Typography
              sx={{
                my: 4,
                fontSize: 20,
              }}
              px='10%'
            >
              {<IntlMessages id='landing.missionAndVisionDesc' />}
            </Typography>
          </Box>
        </Grid>
      </AppGridContainer>
    </Box>
  );
};
