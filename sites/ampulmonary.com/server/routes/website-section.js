const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const upcoming = require('@ascend-media/package-global-monorail/templates/website-section/upcoming');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(resources/conferences)', withWebsiteSection({
    template: upcoming,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
