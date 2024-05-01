const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  nativeXBlock: {
    enabled: Boolean(process.env.NATIVE_X_BLOCK),
  },
  contentPageLoadMore: Boolean(process.env.CONTENT_PAGE_LOAD_MORE),
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/AmerUrological?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/AmerUrological/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/amerurological/?hl=en', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCfBo9pjCePu7Wxn4j4fHyAw', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-urological-association/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5LK3FQ6',
  },
  twitterFeed: {
    href: 'https://twitter.com/AmerUrological?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    tagline: 'Tweets by AmerUrological',
  },
  gcse: {
    id: '2d2e730087c2bd49e',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aua/site_logo.png?h=50',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'AUA <noreply@ascendintegratedmedia.com>',
    logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aua/site_logo.png?h=50',
    bgColor: '#ffffff',
  },
  p1events: {
    tenant: 'ascend',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'auadailynews.org' : '',
  },
  civicComputingApiId: process.env.CIVIC_COMPUTING_API_ID,
};
