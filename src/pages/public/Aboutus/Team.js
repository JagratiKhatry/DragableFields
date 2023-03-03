import React from 'react';
// import Slider from 'react-slick';
import IntlMessages from '@xebia/utility/IntlMessages';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import {teamData} from '@xebia/services/db/extraPages/aboutUs';
import {Fonts} from 'shared/constants/AppEnums';
import AppCard from '@xebia/core/AppCard';
import Grid from '@mui/material/Grid';
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 2,

//   responsive: [
//     {
//       breakpoint: 960,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 400,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };
const Team = () => {
  const teamData = [
    {
      id: 444,
      name: 'Asantha Powel',
      position: 'CEO',
      image: '/assets/images/teamImages/User1.png',
    },
    {
      id: 111,
      name: 'Johna Taylor',
      position: 'CTO',
      image: '/assets/images/teamImages/User4.png',
    },
    {
      id: 222,
      name: 'Nick Campbell',
      position: 'General Manager',
      image: '/assets/images/teamImages/User3.png',
    },
    {
      id: 333,
      name: 'Johna Taylor',
      position: 'CFO',
      image: '/assets/images/teamImages/User5.png',
    },
    {
      id: 555,
      name: 'Ricardo Johnson',
      position: 'Director',
      image: '/assets/images/teamImages/User2.png',
    },
    {
      id: 666,
      name: 'Johnson Lopez',
      position: 'Technical Advisor',
      image: '/assets/images/teamImages/User6.png',
    },
  ];

  return (
    <AppCard>
      <Box component='h2' sx={{mb: 4, fontWeight: Fonts.BOLD, fontSize: 16}}>
        <IntlMessages id='extra.team' />
      </Box>

      {/* {teamData.map((member) => {
          return <>{member.name}</>;
        })} */}
      {/* <Slider {...settings}></Slider> */}
      {/* <Slider {...settings}> */}
      {teamData.map((member) => {
        return (
          <Box sx={{mx: -5}} key={member.id}>
            <Grid item xs={4} md={4}>
              <Box sx={{px: 5, textAlign: 'center'}}>
                <Box width='100%' sx={{mb: 3}}>
                  <img
                    style={{width: '100%'}}
                    src={member.image}
                    alt='about us'
                    title='aboutUs'
                  />
                </Box>
                <Box component='h5' sx={{mb: 1, fontWeight: Fonts.MEDIUM}}>
                  {member.name}
                </Box>
                <Typography>{member.position}</Typography>
              </Box>
            </Grid>
          </Box>
        );
      })}
      {/* </Slider> */}
    </AppCard>
  );
};

export default Team;
