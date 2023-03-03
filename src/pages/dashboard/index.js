
import ContactUs from 'pages/public/Contactus';
import React from 'react';
import { UserTypes } from 'shared/constants/Enum';
const MyWork = React.lazy(() => import('./dashboard'));
const Services = React.lazy(() => import('pages/modules/Services'));

export const mainPages = [
  {
    permittedRole: [UserTypes.BENEFICIARY],
    path: '/dashboard',
    element: <MyWork />,
  },
  {
    permittedRole: [UserTypes.BENEFICIARY],
    path: '/requests',
    element: <MyWork />,
  },
  {
    permittedRole: [UserTypes.BENEFICIARY],
    path: '/tasks',
    element: <MyWork />,
  },
  {
    permittedRole: [UserTypes.BENEFICIARY],
    path: '/certificates',
    element: <ContactUs/>,
  },
  {
    permittedRole: [UserTypes.BENEFICIARY],
    path: '/services',
    element: <Services />,
  },
  {
    permittedRole: [UserTypes.BENEFICIARY],
    path: '/exams',
    element:<MyWork /> ,
  },
];
