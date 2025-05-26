import { faListUl, faCalendarPlus, faSquarePlus, faChartLine, faPhone, faCommentDots, faGrip } from '@fortawesome/free-solid-svg-icons';

// Mock data for navigation links and bottom links
const navigationMenu = [
  {
    category: 'General',
    items: [
      { label: 'Dashboard', icon: faGrip },
      {label:'History',icon:faListUl},
      {label:'Calendar',icon:faCalendarPlus},
      { label: 'Appointments', icon: faSquarePlus },
      { label: 'Statistics', icon: faChartLine },
    ],
  },
  {
    category: 'Tools',
    items: [
      { label: 'Chat', icon: faCommentDots },
      { label: 'Support', icon: faPhone },
    ],
  },
];



export  default  navigationMenu  ;