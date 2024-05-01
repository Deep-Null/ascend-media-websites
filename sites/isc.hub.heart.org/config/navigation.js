const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  { href: 'https://www.heart.org/en/about-us/statements-and-policies/privacy-statement', label: 'Privacy Policy', target: '_blank' },
  { href: 'https://professional.heart.org/en/meetings/international-stroke-conference/registration/terms-and-conditions', label: 'Terms & Conditions', target: '_blank' },
  { href: '/page/accessibility-statement', label: 'Accessibility Statement' },
];

const topics = [
  { href: '/late-breaking-science', label: 'Late-Breaking Science' },
  { href: '/daily-coverage', label: 'Daily Coverage' },
  { href: '/industry-highlights', label: 'Industry Highlights' },
  { href: '/photo-gallery', label: 'Photo Gallery' },
  { href: 'https://professional.heart.org/en/meetings/international-stroke-conference/programming', label: 'Program', target: '_blank' },
];

const secondary = [
  { href: 'https://twitter.com/search?q=%23ISC24&src=typed_query', label: '#ISC24', target: '_blank' },
  { href: 'https://www.heart.org/en/about-us/statements-and-policies/privacy-statement', label: 'Privacy Policy', target: '_blank' },
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
