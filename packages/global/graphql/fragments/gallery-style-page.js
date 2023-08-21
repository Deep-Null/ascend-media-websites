const gql = require('graphql-tag');

module.exports = gql`
fragment DynamicPageFragment on ContentPage {
  id
  name
  teaser(input: { useFallback: false, maxLength: null })
  images(input: { pagination: { limit: 100 }, sort: { order: values } }) {
    edges {
      node {
        id
        src
        alt
        displayName
        caption
        credit
        isLogo
      }
    }
  }
}
`;
