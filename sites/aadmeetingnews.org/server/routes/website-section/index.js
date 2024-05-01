const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ascend-media/package-global/graphql/fragments/website-section-page');
const section = require('@ascend-media/package-global/templates/website-section');
const exhibitors = require('@ascend-media/package-global/templates/website-section/exhibitors');
const nativeX = require('@ascend-media/package-global/templates/website-section/native-x');
const interestingStories = require('@ascend-media/package-global/templates/website-section/interesting-stories');
const mediaGallery = require('@ascend-media/package-global/templates/website-section/media-gallery');

module.exports = (app) => {
  app.get('/:alias(industry-highlights)', withWebsiteSection({
    template: nativeX,
    queryFragment,
  }));

  app.get('/:alias(exhibit-spotlight)', withWebsiteSection({
    template: exhibitors,
    queryFragment,
  }));

  app.get('/:alias(daily-coverage)', withWebsiteSection({
    template: interestingStories,
    queryFragment,
  }));

  app.get('/:alias(photo-gallery)', withWebsiteSection({
    template: mediaGallery,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
