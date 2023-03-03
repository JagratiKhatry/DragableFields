import React from "react";
import { UserTypes } from "shared/constants/Enum";

const ORC = React.lazy(()=> import('./Services/ORC'))

export const otherPages = [
    {
        permittedRole:[UserTypes.BENEFICIARY],
        path:'/services/occupational-registration-and-classification-service',
        element:<ORC />,
    },
    {
        permittedRole:[UserTypes.BENEFICIARY],
        path:'/services/licensure-exam-for-social-specialties-practitioners',
        element:<ORC />,
    },
    {
        permittedRole:[UserTypes.BENEFICIARY],
        path:'/services/reservation-of-appointments-for-practitioners-of-social-specialties',
        element:<ORC />,
    },
    {
        permittedRole:[UserTypes.BENEFICIARY],
        path:'/services/academic-accreditation-for-practitioners-of-social-specialties',
        element:<ORC />,
    },
    {
        permittedRole:[UserTypes.BENEFICIARY],
        path:'/services/request-to-amend-the-professional-category',
        element:<ORC />,
    },
    {
        permittedRole:[UserTypes.BENEFICIARY],
        path:'/services/application-for-professional-re-registration',
        element:<ORC />,
    },
]