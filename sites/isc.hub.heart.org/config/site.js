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
  nativeX,
  gam,
  company: 'Ascend Media',
  socialMediaLinks: [
    { provider: 'twitter', href: 'http://www.twitter.com/American_Heart', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/americanheartassoc', target: '_blank' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/americanheart/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-heart-association', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-TV97VDV',
  },
  twitterFeed: {
    href: 'https://twitter.com/AHAScience',
    tagline: 'Tweets from AHA Science',
  },
  gcse: {
    id: '8fda9b5d0e7f9c0d5',
  },
  wufoo: {
    userName: 'notset',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://img.hub.heart.org/files/base/ascend/hearthub/AHA_icon.svg?h=60',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'HeartHubs <reply@hearthubs.org>',
    logo: 'https://img.hub.heart.org/files/base/ascend/hearthub/image/static/footer.svg?h=90',
    bgColor: '#ffffff',
  },
  p1events: {
    tenant: 'ascend',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'isc.hub.heart.org' : '',
  },
  ahaFooter: true,
  noticePushdown: true,
  civicComputingApiId: process.env.CIVIC_COMPUTING_API_ID,
};
