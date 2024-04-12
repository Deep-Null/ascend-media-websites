const buildQuery = require('@parameter1/base-cms-marko-web-native-x/apollo/graphql/queries/story');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const { getAsObject } = require('@parameter1/base-cms-object-path');
const queryFragment = require('../graphql/fragments/native-x-story');
const template = require('../templates/content/native-x-story');

module.exports = (app) => {
  const config = getAsObject(app, 'locals.nativeX');
  app.get('/sponsored/:section/:slug/:id', asyncRoute(async (req, res) => {
    const { path, url } = req;
    if (path.substr(-1) === '/' && path.length > 1) {
      const query = url.slice(path.length);
      const safe = path.slice(0, -1).replace(/\/+/g, '/');
      res.redirect(301, `${safe}${query}`);
      return;
    }

    const { id } = req.params;
    const preview = Boolean(req.query.preview);
    const result = await config.client.query({
      query: buildQuery(queryFragment),
      variables: { input: { id, preview } },
    });
    const story = getAsObject(result, 'data.publishedStory');
    res.locals.publisherId = story.publisher.id;
    res.marko(template, { story });
  }));
};
