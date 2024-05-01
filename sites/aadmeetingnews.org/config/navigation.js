const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [];

const topics = [
  { href: '/daily-coverage', label: 'Daily Coverage' },
  { href: '/industry-highlights', label: 'Industry Highlights' },
  { href: '/photo-gallery', label: 'Photo Gallery' },
  { href: '/product-samples', label: 'Product Samples' },
  { href: '/exhibit-spotlight', label: 'Exhibit Spotlight' },
];

const secondary = [
  { href: 'https://am2024.aad.org/sessions', label: 'Program', target: '_blank' },
  { href: 'https://www.aad.org/member/meetings-education/am24/registration', label: 'Registration', target: '_blank' },
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
