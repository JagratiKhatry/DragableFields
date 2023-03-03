import React from 'react';
import ContactUsForm from './ContactUsForm';
import AppGridContainer from '@xebia/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import SendMessage from './SendMessage';
import AppAnimate from '@xebia/core/AppAnimate';
import SimpleMap from './SimpleMap';
import AppCard from '@xebia/core/AppCard';

const contactUsData = {
  sendMessage: {
    description:
      "The clean and well commented code allows easy customization of the theme. It's designed for describing your app, agency or business.",
  },
};
const ContactUs = () => {
  return (
    <>
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppCard>
        <SendMessage sendMessage={contactUsData.sendMessage} />
        <AppGridContainer>
          <Grid item xs={12} md={6}>
              <ContactUsForm  />
          </Grid>
          <Grid item xs={12} md={6}>
            <SimpleMap />
          </Grid>
        </AppGridContainer>
     
      </AppCard>
    </AppAnimate>

    </>
  );
};

export default ContactUs;
