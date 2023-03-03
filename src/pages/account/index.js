import React from 'react';
import { UserTypes } from 'shared/constants/Enum';
import Account from './MyProfile';

export const accountPages = [
  {
    permittedRole: [UserTypes.BENEFICIARY,],
    path: '/my-profile',
    element: <Account />,
  },
];
