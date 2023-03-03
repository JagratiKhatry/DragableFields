import React from 'react';

import Grid from '@mui/material/Grid';
import {Box, Button, Typography} from '@mui/material';
import AppGridContainer from '@xebia/core/AppGridContainer';
import IntlMessages from '@xebia/utility/IntlMessages';
import {Fonts} from 'shared/constants/AppEnums';
import AppCard from '@xebia/core/AppCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {APIServices} from 'pages/modules/Services';

export const Service = () => {
  return (
    <Box
      sx={{
        margin: 'auto',
        backgroundSize: 'cover',
        backgroundImage: "url('/assets/images/public/Image 2.png')",
      }}
    >
      <Box sx={{textAlign: 'center'}} p={5}>
        <Typography
          component={'span'}
          sx={{
            fontSize: 40,
            fontWeight: Fonts.BOLD,
            color: 'white',
          }}
        >
          {<IntlMessages id='services.our' />}{' '}
          <Typography
            variant={'span'}
            sx={{color: (theme) => theme.palette.primary.main}}
          >
            {<IntlMessages id='services.services' />}
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
          {<IntlMessages id='services.accessElectronixServicesText' />}
        </Typography>

        <Box sx={{width: '100%', margin: 'auto'}}>
          {/* <Stack spacing={4} direction='row'  sx={{width: '100%', margin: 'auto'}}> */}
          <Button
            color='primary'
            variant='contained'
            sx={{
              width: '10%',
              height: '60px',
              backgroundColor: 'white',
              color: (theme) => theme.palette.primary.main,
            }}
          >
            All Services
            {/* <IntlMessages id='landing.createAccount' /> */}
          </Button>
          <Button
            // color='white'
            variant='outlined'
            sx={{ml: 4, width: '10%', height: '60px'}}
          >
            New Services
            {/* <IntlMessages id='landing.browseServices' /> */}
          </Button>
          {/* </Stack> */}
        </Box>

        <AppGridContainer spacing={4}>
          {APIServices.map((service) => (
            <Grid
              key={service.serviceType}
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              p={{lg: 12, md: 8, sm: 4, xs: 4}}
            >
              <Box
                sx={{
                  border: '2px solid #147E82',
                  borderRadius: '50%',
                  maxWidth: 'fit-content',
                  padding: '2%',
                  position: 'relative',
                  left: '60px',
                  top: '30px',
                  backgroundColor: 'white',
                  zIndex: 1,
                }}
              >
                <img src='/assets/images/public/icon 1.png' alt='service-icon' />
              </Box>
              <AppCard
                sxStyle={{
                  textAlign: 'left',
                  height: 1,
                  border: (theme) => `2px solid ${theme.palette.primary.main}`,
                  '& .MuiCardContent-root:hover': {
                    color: 'white',
                    background: (theme) =>
                      `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 50%)`,
                    '& span': {
                      color: 'white',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    px: 4,
                    pt: 3,
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <Box
                    component='h5'
                    sx={{
                      my: 8,
                      fontSize: 24,
                      fontWeight: Fonts.BOLD,
                      overflowWrap: 'break-word',
                    }}
                  >
                    {service.title}
                  </Box>
                  <Box
                    component='p'
                    sx={{
                      mb: 4,
                      fontSize: 20,
                      // position:'absolute',
                      // bottom:20
                    }}
                  >
                    {service.desc}
                  </Box>
                  <Box
                    component='span'
                    sx={{
                      fontSize: 20,
                      fontWeight: Fonts.BOLD,
                      color: 'primary.main',
                      cursor: 'pointer',
                    }}
                    onClick={() => Navigate(`/services${service.url}`)}
                  >
                    <IntlMessages id='services.goToService' />{' '}
                    <ArrowForwardIcon sx={{verticalAlign: 'middle'}} />
                  </Box>
                </Box>
              </AppCard>
            </Grid>
          ))}
        </AppGridContainer>

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
            View all services
            {/* <IntlMessages id='landing.createAccount' /> */}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
