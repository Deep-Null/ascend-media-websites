// const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
// const home = require('../templates/index');
// const queryFragment = require('../graphql/fragments/website-section-page');

module.exports = (app) => {
  // app.get('/', withWebsiteSection({
  //   aliasResolver: () => 'home',
  //   template: home,
  //   queryFragment,
  // }));
  app.get('/', (req, res) => {
    const to = '/directory';
    res.redirect(301, to);
  });
};
