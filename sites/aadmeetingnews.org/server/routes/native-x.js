const queryFragment = require('@ascend-media/package-global/graphql/fragments/native-x-story');
const template = require('@ascend-media/package-global/templates/content/native-x-story');
const withNativeXStory = require('@parameter1/base-cms-marko-web-native-x/middleware/with-story');
const { getAsObject } = require('@parameter1/base-cms-object-path');

module.exports = (app) => {
  const config = getAsObject(app, 'locals.nativeX');
  app.get('/aesthetics/sponsored/:section/:slug/:id', withNativeXStory({ config, template, queryFragment }));
};
