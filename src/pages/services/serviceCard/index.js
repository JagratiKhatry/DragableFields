import React from 'react';
import AppCard from '@xebia/core/AppCard';
import Box from '@mui/material/Box';
import {Fonts} from 'shared/constants/AppEnums';
import {alpha, Button} from '@mui/material';
import IntlMessages from '@xebia/utility/IntlMessages';


const ServiceCard = ({course}) => {
  const data= {
    id: 1,
    title: <IntlMessages id='landing.services.beneficiaryMgmt' />,
    desc: 'This is a extensive course for learning',
    image: '/assets/images/s1.png',
    newService: false,
  }
  return (
    <AppCard sxStyle={{height: 1, borderRadius:"3px",  textAlign:"center"}} contentStyle={{padding: 8, }}   sx={{
        ':hover':{
            backgroundColor: (theme)=>alpha(theme.palette.primary.main, 0.1),
            boxShadow: `20px ${(theme)=>alpha(theme.palette.common.black, 0.08)}`,
            boxShaow:20,
            transition: 'all 0.5s ease',
            transform: 'translateY(20px)',
        },
        '& .hidden-content':{
            display:"none"

        },
        '& :hover .hidden-content':{
            display:"block"
        }

    }}>
      <Box sx={{width:300, height: 300}}>
        <img src={data.image} alt={data.title} />
      </Box>
      <Box
        sx={{
          px: 4,
          pt: 3,
          transition: 'all 0.10s ease',
        }}
        className='hidden-content'
      >
        <Box
          component='h5'
          sx={{
            mb: 1,
            fontSize: 16,
            fontWeight: Fonts.BOLD,
            
          }}
        >
          {data.title}
        </Box>
        <Box
          component='p'
          sx={{
            mb: 4,
            color: 'text.secondary',
          }}
        >
          {data.desc}
        </Box>
        <Box>
          <Button>Go to Service</Button>
        </Box>
      </Box>
    </AppCard>
  );
};

export default ServiceCard;


