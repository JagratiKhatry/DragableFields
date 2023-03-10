import React from 'react';
import Grid from '@mui/material/Grid';
import AppGridContainer from '@xebia/core/AppGridContainer';
// import Introduction from './Introduction';
// import Team from './Team';
// import {aboutUsData} from '@xebia/services/db/extraPages/aboutUs';
// import Sections from './Sections';

import Box from '@mui/material/Box';
import AppAnimate from '@xebia/core/AppAnimate';
import Introduction from './Introduction';
import Team from './Team';
// import AppTextField from '@xebia/core/AppFormComponents/AppTextField';
const AboutUs = () => {
  //   const brandingData = aboutUsData.find((about) => about.alias === 'branding');
  //   const photoGraphyData = aboutUsData.find(
  //     (about) => about.alias === 'photography',
  //   );
  //   const seoData = aboutUsData.find((about) => about.alias === 'seo');

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box flex={1}>
        <AppGridContainer>
          <Grid item xs={12} md={12}>
            <Introduction />
          </Grid>

          <Grid item xs={12} md={4}>
            {/* <Sections data={brandingData} /> */}
          </Grid>

          <Grid item xs={12} md={4}>
            {/* <Sections data={photoGraphyData} /> */}
          </Grid>

          <Grid item xs={12} md={4}>
            {/* <Sections data={seoData} /> */}
          </Grid>
          <Grid item xs={12} md={12}>
            <Team />
          </Grid>
        </AppGridContainer>
      </Box>
    </AppAnimate>
  );
};

export default AboutUs;
