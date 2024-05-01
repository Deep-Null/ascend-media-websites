const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/meeting-coverage', label: 'Meeting Coverage' },
  { href: '/guidelines', label: 'Guidelines' },
  { href: '/industry-highlights', label: 'Industry Highlights' },
  { href: '/science-technology-hall', label: 'Science & Technology Hall' },
  { href: '/photo-gallery', label: 'Photo Gallery' },
];

const secondary = [
  { href: 'https://www.auanet.org/AUA2024/program', label: 'Program', target: '_blank' },
  { href: 'https://www.auanet.org/AUA2024/register', label: 'Register', target: '_blank' },
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
