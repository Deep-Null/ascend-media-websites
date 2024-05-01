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
    { provider: 'twitter', href: 'https://twitter.com/SocietyHospMed', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/SocietyHospMed/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/societyhospmed/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/societyhospmed/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-K7Q5JTS',
  },
  twitterFeed: {
    href: 'https://twitter.com/SocietyHospMed',
    tagline: 'Tweets by SHM',
  },
  gcse: {
    id: '3afae276bd265adea',
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
  useFooterOverride: true,
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'AUA <noreply@ascendintegratedmedia.com>',
    logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aua/site_logo.png?h=50',
    bgColor: '#ffffff',
  },
  civicComputingApiId: process.env.CIVIC_COMPUTING_API_ID,
};
