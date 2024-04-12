const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const nativeX = require('./native-x');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);

  // Homepage
  home(app);

  // Site Native X route
  nativeX(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
