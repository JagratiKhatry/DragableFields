import {HiOutlineChartSquareBar, HiOutlineClipboardCheck, HiOutlineDocument, HiPencil, HiPencilAlt, HiOutlineCog} from 'react-icons/hi';
const routesConfig = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    messageId: 'sidebar.dashboard',
    type: 'item',
    icon: <HiOutlineChartSquareBar />,
    url: '/dashboard',
  },
  {
    id: 'requests',
    title: 'requests',
    messageId: 'sidebar.myrequests',
    type: 'item',
    icon: <HiPencilAlt />,
    url: '/requests',
  },
  {
    id: 'services',
    title: 'services',
    messageId: 'sidebar.services',
    type: 'item',
    icon: <HiOutlineCog  />,
    url: '/services',
  },
  {
    id: 'tasks',
    title: 'Tasks',
    messageId: 'sidebar.tasks',
    type: 'item',
    icon: <HiPencil />,
    url: '/tasks',
  },
  {
    id: 'certificatesAndLicenses',
    title: 'Certificates and Licenses',
    messageId: 'sidebar.certificatesAndLicenses',
    type: 'item',
    icon: <HiOutlineDocument />,
    url: '/certificates',
  },
  {
    id: 'exams',
    title: 'exams',
    messageId: 'sidebar.exams',
    type: 'item',
    icon: <HiOutlineClipboardCheck />,
    url: '/exams',
  },
 
];
export default routesConfig;
