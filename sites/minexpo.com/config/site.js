const gam = require('./gam');
const navigation = require('./navigation');
const leaders = require('./leaders');
const nativeX = require('./native-x');

module.exports = {
  gam,
  leaders,
  navigation,
  nativeX,
  company: 'MINExpo International® 2021',
  logos: {
    navbar: {
      src: 'https://img.hub.heart.org/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=90',
      srcset: [
        'https://img.hub.heart.org/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=`180 2x',
      ],
    },
    footer: {
      src: 'https://img.hub.heart.org/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=45',
      srcset: [
        'https://img.hub.heart.org/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    // { provider: 'facebook', href: 'https://www.facebook.com/PackagingWorld' },
    // { provider: 'twitter', href: 'https://twitter.com/packagingworld' },
    // { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/packaging-world' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-5MBFGGJ',
    slotPrefix: 'pw',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  magazines: {
    description: '',
  },
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'support@parameter1.com',
    replyTo: 'support@parameter1.com',
    sendFrom: 'MINExpo Show Directory <noreply@parameter1.com>',
    logo: 'https://img.hub.heart.org/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=45',
    bgColor: '#000',
  },
  contactUs: {
    notificationDefaults: {
      branding: {
        bgColor: '#000',
        logo: 'https://img.hub.heart.org/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=45',
      },
      to: 'DSanford@ascendintegratedmedia.com',
      sendFrom: 'MINExpo Show Directory <noreply@parameter1.com>',
    },
    branding: {
      bgColor: '#000',
      logo: 'https://img.hub.heart.org/files/base/ascend/minexpo/image/static/minexpo-logo.png?h=45',
    },
    to: 'DSanford@ascendintegratedmedia.com',
  },
  civicComputingApiId: process.env.CIVIC_COMPUTING_API_ID,
};
