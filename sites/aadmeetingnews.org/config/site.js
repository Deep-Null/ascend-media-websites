const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  nativeXBlock: {
    enabled: Boolean(process.env.NATIVE_X_BLOCK),
    sectionName: 'Presented by',
  },
  contentPageLoadMore: Boolean(process.env.CONTENT_PAGE_LOAD_MORE),
  contentPageLoadMoreSettings: {
    restrictedOn: ['press-release'],
    useSectionForHeader: true,
  },
  hideRailOnContentTypes: ['document', 'press-release', 'product'],
  logos,
  navigation,
  gam,
  nativeX,
  company: 'Ascend Media',
  copyrightNotice: 'All rights reserved. DermWorld Meeting News Central is a publication of the American Academy of Dermatology.',
  customCopyright: '© Ascend Media All rights reserved. DermWorld Meeting News Central is a publication of the American Academy of Dermatology.',
  sponsoredText: 'Paid Advertising Content',
  sponsoredSlug: {
    value: 'Presented',
    withAdvertiser: true,
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AADmember', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/aadmember/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/AADmember', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5R9XFFX',
  },
  twitterFeed: {
    href: 'https://twitter.com/AADmember?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    tagline: 'Tweets by AADMember',
  },
  gcse: {
    id: '32fecd94ba5f4160a',
  },
  contactUs: {
    to: 'DSanford@ascendintegratedmedia.com',
    branding: {
      logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aad/AAD_Logo_Header.png?h=50',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'DSanford@ascendintegratedmedia.com',
    sendFrom: 'AAD <noreply@ascendintegratedmedia.com>',
    logo: 'https://img.ascendmedia.com/files/base/ascend/hh/image/static/aad/AAD_Logo_Header.pngh=50',
    bgColor: '#ffffff',
  },
  p1events: {
    tenant: 'ascend',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'aadmeetingnews.org' : '',
  },
  exhibitors: {
    title: 'Exhibit Spotlight',
  },
  civicComputingApiId: process.env.CIVIC_COMPUTING_API_ID,
};
