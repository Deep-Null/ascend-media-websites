const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  nativeXBlock: process.env.NATIVE_X_BLOCK || false,
  restrictRightRailDisplay: process.env.RESTRICT_RIGHT_RAIL_DISPLAY || false,
  contentPageLoadMore: process.env.CONTENT_PAGE_LOAD_MORE || false,
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  sponsoredText: 'Paid Advertising Content',
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/SocietyHospMed', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/SocietyHospMed/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/societyhospmed/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/societyhospmed/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-K7Q5JTS',
  },
  twitterFeed: {
    href: '',
    tagline: 'Tweets by SHM',
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
};
