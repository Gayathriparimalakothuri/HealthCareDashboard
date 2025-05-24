import { faHome, faCalendarCheck, faChartBar, faNotesMedical, faComments, faLifeRing, faCog, faListUl, faCalendarPlus, faSquarePlus, faChartLine, faPhone, faCommentDots, faGrip } from '@fortawesome/free-solid-svg-icons';

const navigationLinks = [
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

const bottomLinks = [
  { label: 'Settings', icon: '⚙️' },
];

export { navigationLinks, bottomLinks };