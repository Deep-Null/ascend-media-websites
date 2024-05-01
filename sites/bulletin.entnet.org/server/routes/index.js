const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const magazine = require('./magazine');
const search = require('./search');
const classifieds = require('./classifieds');
const aboutTheBulletin = require('./about-the-bulletin');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Classifieds
  classifieds(app);

  // Search Pages
  search(app);

  // Content Pages
  magazine(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // About THe Bulletin
  aboutTheBulletin(app);

  // Website Sections
  websiteSections(app);
};
