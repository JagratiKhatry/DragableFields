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
import {MissionAndVision} from './missionAndVision';
import {AboutUs} from './aboutUs';

const LandingItems = () => {
  const [allServicesData, setAllServicesData] = useState([]);
  const [showAllServices, setShowAllServices] = useState(false);

  // Temp Landing Services Data --->
  const courseCategories = [
    {
      id: 1,
      title: <IntlMessages id='landing.services.beneficiaryMgmt' />,
      desc: 'This is a extensive course for learning',
      image: '/assets/images/s1.png',
      newService: false,
    },
    {
      id: 2,
      title: (
        <IntlMessages id='landing.services.professionalRegistrationForSocialSpecs' />
      ),
      desc: 'This is a extensive course for learning',
      image: '/assets/images/s2.png',
      newService: true,
    },
    {
      id: 3,
      title: (
        <IntlMessages id='landing.services.professionalClassificationOfSocialSpecs' />
      ),
      desc: 'This is a extensive course for learning',
      image: '/assets/images/s3.png',
      newService: false,
    },
    {
      id: 4,
      title: <IntlMessages id='landing.services.licensingTestOfSocialSpecs' />,
      desc: 'This is a extensive course for learning',
      image: '/assets/images/s4.png',
      newService: true,
    },
  ];

  // Temp All Services Data --->
  const dynamicServiceList = () => {
    const dynamicCard = [];
    Object.entries(enMessages).forEach((entry, index) => {
      const [key, value] = entry;
      if (key.includes('landing.services')) {
        dynamicCard.push({
          id: index,
          title: value,
          desc: 'This is a extensive course for learning',
          image: '/assets/images/s1.png',
          newService: null,
        });
      }
    });
    setAllServicesData(dynamicCard);
  };

  // Function Calling --->
  useEffect(() => {
    dynamicServiceList();
  }, []);

  return (
    <>
      <Banner />

      <Service />

      <AboutUs />

      <MissionAndVision />
    </>
  );
};

export default LandingItems;
