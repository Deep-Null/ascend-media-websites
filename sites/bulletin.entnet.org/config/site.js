const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const nativeX = require('./native-x');

module.exports = {
  logos,
  navigation,
  gam,
  nativeX,
  company: 'American Academy of Otolaryngology–Head and Neck Surgery',
  advertise: 'Acceptance of advertising in the <i>Bulletin</i> in no way constitutes approval or endorsement by AAO-HNS of products or services advertised unless indicated as such.',
  socialMediaLinks: [],
  gtm: {
    containerId: 'GTM-5XS5Z5K',
  },
  gcse: {
    id: '1ac0dab5df984cf77',
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
      logo: 'https://img.ascendmedia.com/files/base/ascend/bulletin/image/static/bulletin.png',
    },
    support: {
      email: 'reply@hearthubs.org',
    },
  },
  inquiry: {
    enabled: false,
    // directSend: true,
    // sendTo: 'DSanford@ascendintegratedmedia.com',
    // sendFrom: 'HeartHubs <reply@hearthubs.org>',
    // logo: 'https://img.hub.heart.org/files/base/ascend/hearthub/image/static/footer.svg?h=90',
    // bgColor: '#ffffff',
  },
  civicComputingApiId: process.env.CIVIC_COMPUTING_API_ID,
};
