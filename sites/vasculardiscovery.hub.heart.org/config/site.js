const navigation = require('./navigation');
const gam = require('./gam');
const logos = require('./logos');
const blocks = require('./blocks');

module.exports = {
  blocks,
  logos,
  navigation,
  gam,
  company: 'Ascend Media',
  socialMediaLinks: [
    { provider: 'twitter', href: 'http://www.twitter.com/American_Heart', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/AmericanHeart', target: '_blank' },
    { provider: 'instagram', href: 'https://instagram.com/american_heart', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/americanheartassoc', target: '_blank' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/americanheart/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/american-heart-association', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5XKG249',
  },
  gcse: {
    id: 'ac9011d85eb846f19',
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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'vasculardiscovery.hub.heart.org' : '',
  },
  ahaFooter: true,
  civicComputingApiId: process.env.CIVIC_COMPUTING_API_ID,
};
