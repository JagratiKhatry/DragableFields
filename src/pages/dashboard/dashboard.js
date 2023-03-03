import React from 'react';
import AppInfoView from '@xebia/core/AppInfoView';
import {alpha, Grid} from '@mui/material';
import AppGridContainer from '@xebia/core/AppGridContainer';
import SalesState from './SalesState';
import Notifications from './Notifications';
import AppAnimate from '@xebia/core/AppAnimate';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DraftsIcon from '@mui/icons-material/Drafts';
import CropRotateIcon from '@mui/icons-material/CropRotate';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AppComponentCard from '@xebia/core/AppComponentCard';
import CompletedRequests from './CompeletedRequests';
import InProgessRequests from './InProgressRequests';
import IntlMessages from '@xebia/utility/IntlMessages';
const MyWork = () => {
  const ecommerceData = {
    salesState: [
      {
        id: 1,
        type: <IntlMessages id='requests.draft' />,
        value: '935',
        bgColor: (theme) => theme.palette.primary.light,
        icon: <DraftsIcon />,
      },
      {
        id: 2,
        type: <IntlMessages id='requests.inProgress' />,
        value: '625',
        bgColor: (theme) => alpha(theme.palette.warning.main,0.80),
        icon:<CropRotateIcon />,
      },
      {
        id: 3,
        type: <IntlMessages id='requests.approved' />,
        value: '500',
        bgColor: (theme) => theme.palette.success.main,
        icon:  <CheckCircleIcon />,
      },
      {
        id: 4,
        type: <IntlMessages id='requests.rejected' />,
        value: '320',
        bgColor:'red',
        icon: <ThumbDownIcon />,
      },
    ],
    marketingCampaign: [
      {
        id: 1,
        name: 'Facebook Ads',
        description: '63 Likes, 387 Shares',
        icon: '/assets/images/dashboard/facebook_icon.svg',
        graph: 20,
        growth: true,
        spent: 'My Role Model Program',
        status: 'compelted',
        requestId: 'REQ-03-01678',
      },
      {
        id: 2,
        name: 'Twitter Ads',
        description: '63 Likes, 387 Shares',
        icon: '/assets/images/dashboard/twitter_icon.svg',
        graph: -5,
        growth: false,
        spent: 'My Role Model Program',
        status: 'compelted',
        requestId: 'REQ-03-01678',
      },
      {
        id: 3,
        name: 'Instagram',
        description: '63 Likes, 387 Shares',
        like: 'Bicycle',
        share: '08-21-2020',
        icon: '/assets/images/dashboard/instagram_icon.svg',
        graph: 20,
        growth: true,
        spent: 'My Role Model Program',
        status: 'compelted',
        requestId: 'REQ-03-01678',
      },
      {
        id: 4,
        name: 'LinkedIn',
        description: '63 Likes, 387 Shares',
        like: 'Bicycle',
        share: '08-21-2020',
        icon: '/assets/images/dashboard/linkedin_icon.svg',
        graph: 25,
        growth: true,
        spent: 'My Role Model Program',
        status: 'compelted',
        requestId: 'REQ-03-01678',
      },
      {
        id: 5,
        name: 'Youtube',
        description: '63 Likes, 387 Shares',
        like: 'Bicycle',
        share: '08-21-2020',
        icon: '/assets/images/dashboard/youtube_icon.svg',
        graph: 45,
        growth: true,
        spent: 'My Role Model Program',
        status: 'compelted',
        requestId: 'REQ-03-01678',
      },
      {
        id: 6,
        name: 'Dribble',
        like: 'Bicycle',
        description: '63 Likes, 387 Shares',
        share: '08-21-2020',
        icon: '/assets/images/dashboard/dribble_icon.svg',
        graph: 25,
        growth: true,
        spent: 'My Role Model Programs',
        status: 'compelted',
        requestId: 'REQ-03-01678',
      },
      {
        id: 6,
        name: 'Dribble',
        like: 'Bicycle',
        description: '63 Likes, 387 Shares',
        share: '08-21-2020',
        icon: '/assets/images/dashboard/dribble_icon.svg',
        graph: 25,
        growth: true,
        spent: 'My Role Model Programs',
        status: 'compelted',
        requestId: 'REQ-03-01678',
      },
      {
        id: 6,
        name: 'Dribble',
        like: 'Bicycle',
        description: '63 Likes, 387 Shares',
        share: '08-21-2020',
        icon: '/assets/images/dashboard/dribble_icon.svg',
        graph: 25,
        growth: true,
        spent: 'My Role Model Programs',
        status: 'compelted',
        requestId: 'REQ-03-01678',
      },
      {
        id: 6,
        name: 'Dribble',
        like: 'Bicycle',
        description: '63 Likes, 387 Shares',
        share: '08-21-2020',
        icon: '/assets/images/dashboard/dribble_icon.svg',
        graph: 25,
        growth: true,
        spent: 'My Role Model Programs',
        status: 'compelted',
        requestId: 'REQ-03-01678',
      },
    ],
    notifications: [
      {
        id: 10001,
        image: '/assets/images/avatar/A1.jpg',
        name: 'REQ-03-20-01657',
        type: <IntlMessages id='requests.returned' />,
        message: <IntlMessages id='requests.uploadCorrectDoc' />,
        date:'12-08-2022',
        severity: 'informational',
        color: '#F88333',
      },
      {
        id: 10002,
        image: '/assets/images/avatar/A2.jpg',
        name: 'REQ-03-20-01657',
        type: <IntlMessages id='requests.invoiceGenerated' />,
        message: <IntlMessages id='requests.completePayment' />,
        date:'12-08-2022',
        severity: 'critical' ,
        color: '#0A8FDC',
      },
      {
        id: 10003,
        image: '/assets/images/avatar/A1.jpg',
        name: 'REQ-03-20-01657',
        type: <IntlMessages id='requests.returned' />,
        message: <IntlMessages id='requests.uploadCorrectDoc' />,
        date:'12-08-2022',
        severity: 'informational',
        color: '#F88333',
      },
      {
        id: 10004,
        image: '/assets/images/avatar/A4.jpg',
        name: 'REQ-03-20-01657',
        type: <IntlMessages id='requests.invoiceGenerated' />,
        message: <IntlMessages id='requests.completePayment' />,
        date:'12-08-2022',
        severity: 'critical' ,
        color: '#47B46B',
      },
      {
        id: 10005,
        image: '/assets/images/avatar/A4.jpg',
        name: 'REQ-03-20-01657',
        type: <IntlMessages id='requests.returned' />,
        message: <IntlMessages id='requests.uploadCorrectDoc' />,
        date:'12-08-2022',
        severity: 'warning' ,
        color: '#0A8FDC',
      },
      {
        id: 10006,
        image: '/assets/images/avatar/A4.jpg',
        name: 'REQ-03-20-01657',
        type: <IntlMessages id='requests.invoiceGenerated' />,
        message: <IntlMessages id='requests.completePayment' />,
        date:'12-08-2022',
        severity: 'critical' ,
        color: '#47B46B',
      },
      
      {
        id: 10007,
        image: '/assets/images/avatar/A4.jpg',
        name: 'REQ-03-20-01657',
        type: <IntlMessages id='requests.returned' />,
        message: <IntlMessages id='requests.uploadCorrectDoc' />,
        date:'12-08-2022',
        severity: 'warning' ,
        color: '#0A8FDC',
      },
      {
        id: 10008,
        image: '/assets/images/avatar/A4.jpg',
        name: 'REQ-03-20-01657',
        type: <IntlMessages id='requests.invoiceGenerated' />,
        message: <IntlMessages id='requests.completePayment' />,
        date:'12-08-2022',
        severity: 'critical' ,
        color: '#47B46B',
      },
     
      {
        id: 10009,
        image: '/assets/images/avatar/A4.jpg',
        name: 'REQ-03-20-01657',
        type: <IntlMessages id='requests.returned' />,
        message: <IntlMessages id='requests.uploadCorrectDoc' />,
        date:'12-08-2022',
        severity: 'warning' ,
        color: '#0A8FDC',
      },
    ],
    recentOrders: [
      {
        id: '#SK231',
        customer: 'Ina Hughes',
        product: 'Bicycle',
        date: '08-21-2020',
        paymentType: 'COD',
        price: '$125',
        status: <IntlMessages id='common.inProgress' />,
      },
      {
        id: '#SK232',
        customer: 'Myrtie Ferguson',
        date: '08-12-2020',
        product: 'Addida Shoes',
        paymentType: 'Prepaid',
        price: '$100',
        status: <IntlMessages id='common.inProgress' />,
      },
      {
        id: '#SK233',
        customer: 'Johnny Herrera',
        date: '07-30-2020',
        product: 'Sleeve Jacket',
        price: '$1,020',
        paymentType: 'Prepaid',
        status: <IntlMessages id='common.inProgress' />,
      },
      {
        id: '#SK234',
        customer: 'Myrtie Ferguson',
        date: '08-12-2020',
        product: 'Addida Shoes',
        paymentType: 'Prepaid',
        price: '$100',
        status: <IntlMessages id='common.inProgress' />,
      },
    ],
  };
  return (
    <>
      {ecommerceData ? (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppGridContainer>
            {ecommerceData.salesState.map((state, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <SalesState state={state} />
              </Grid>
            ))}
            <Grid item xs={12} md={8}>
              <AppComponentCard
                title={<IntlMessages id='sidebar.myrequests' />} 
                component={InProgessRequests}
                noScrollbar
                description=''
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Notifications notifications={ecommerceData.notifications} />
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default MyWork;
