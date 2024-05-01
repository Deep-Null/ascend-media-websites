const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/', label: 'Current Issue' },
  { href: '/magazine/6001dfb8a982a33b138b4589', label: 'Archives' },
  { href: '/classifieds', label: 'Jobs/Events' },
  { href: '/about-the-bulletin', label: 'About The Bulletin' },
];

const secondary = [
  { href: '/clinical-patient-care', label: 'Clinical' },
  { href: '/research-quality', label: 'Research' },
  { href: '/professional-personal-development', label: 'Professional Development' },
  { href: '/business-of-medicine-practice-management', label: 'Practice Management' },
  { href: 'https://ratecards.ascendeventmedia.com/aao-hnsbulletin2024/', label: 'Advertise', target: '_blank' },
];

module.exports = {

  primary: {
    items: [...topics],
  },
  secondary: {
    items: [...secondary],
  },
  tertiary: {
    items: [searchItem],
  },
  menu: [
    {
      label: 'Topics',
      items: [...topics],
    },
    {
      label: 'Resources',
      items: [...secondary],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};
