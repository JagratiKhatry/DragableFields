import React, {useState} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import AppCard from '@xebia/core/AppCard';
import {useNavigate} from 'react-router-dom';
import {Fonts} from 'shared/constants/AppEnums';
import IntlMessages from '@xebia/utility/IntlMessages';
import {ReactHookInput} from 'pages/reactHookForms/ReactHookInput';
import SearchIcon from '@mui/icons-material/Search';
import {useForm} from 'react-hook-form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const APIServices = [
  {
    serviceType: 1,
    title: <IntlMessages id='requests.ORC' />,
    desc: <IntlMessages id='services.serviceDesc' />,
    image: '/assets/images/s4.png',
    url: '/occupational-registration-and-classification-service',
  },
  {
    serviceType: 2,
    title: <IntlMessages id='services.LESSPService' />,
    desc: <IntlMessages id='services.serviceDesc' />,
    image: '/assets/images/s4.png',
    url: '/licensure-exam-for-social-specialties-practitioners',
  },
  {
    serviceType: 3,
    title:
    <IntlMessages id='services.RAPSSService' />,
    desc: <IntlMessages id='services.serviceDesc' />,
    image: '/assets/images/s4.png',
    url: '/reservation-of-appointments-for-practitioners-of-social-specialties',
  },
  {
    serviceType: 4,
    title: <IntlMessages id='services.AAPSSService' />,
    desc: <IntlMessages id='services.serviceDesc' />,
    image: '/assets/images/s4.png',
    url: '/academic-accreditation-for-practitioners-of-social-specialties',
  },
  {
    serviceType: 5,
    title: <IntlMessages id='services.RAPCService' />,
    desc: <IntlMessages id='services.serviceDesc' />,
    image: '/assets/images/s4.png',
    url: '/request-to-amend-the-professional-category',
  },
  {
    serviceType: 6,
    title: <IntlMessages id='services.APRRService' />,
    desc: <IntlMessages id='services.serviceDesc' />,
    image: '/assets/images/s4.png',
    url: '/application-for-professional-re-registration',
  },
];

const Services = () => {
  const Navigate = useNavigate();

  const {control, watch} = useForm();
  const [services, setServices] = useState(APIServices);

  const handleSearchClick = () => {
    setServices(
      APIServices.filter((service) =>
        service.title
          .toLocaleLowerCase()
          .includes(watch('searchTerm').toLocaleLowerCase()),
      ),
    );
  };

  return (
    <Box>
      <AppCard sxStyle={{textAlign: 'center',height:1}} >
        <Box p={2}>
          <Typography
            component={'span'}
            sx={{
              fontSize: 40,
              fontWeight: Fonts.BOLD,
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
            }}
            px='10%'
          >{<IntlMessages id='services.accessElectronixServicesText' />}
          </Typography>
          <ReactHookInput
            control={control}
            name='searchTerm'
            label={<IntlMessages id='common.search' />}
            endAdornment={<SearchIcon />}
            hanldeIconClick={handleSearchClick}
            sx={{width: '60%'}}
          />
        </Box>

        <Grid container>
          {services.map((service) => (
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
                <img src='/assets/images/social-care.svg' alt='service-icon' />
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
        </Grid>
      </AppCard>
    </Box>
  );
};

export default Services;
