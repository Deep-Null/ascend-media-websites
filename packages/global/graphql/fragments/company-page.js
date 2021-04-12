const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentCompanyFragment on Content {
  id
  type
  name
  teaser(input: { maxLength: 0 })
  body

  primarySection {
    id
    name
    alias
    hierarchy {
      id
      name
      alias
    }
  }

  primaryImage {
    id
    src
    alt
  }

  siteContext {
    path
  }
  ... on ContentCompany {

    address1
    address2
    cityStateZip
    country

    phone
    tollfree
    fax
    website
    title
    mobile
    email
    publicEmail

    youtube {
      username
      channelId
      url
    }

    # kv data
    yearsInOperation
    numberOfEmployees
    salesChannels
    salesRegion

    # long text data
    productSummary
    servicesProvided
    serviceInformation
    trainingInformation
    warrantyInformation

    contacts: publicContacts {
      edges {
        node {
          id
          name
          title
          publicEmail
          primaryImage {
            id
            src(input: { options: { auto: "format", h: 100, w: 100, mask: "ellipse", fit: "facearea", facepad: 3 } })
          }
        }
      }
    }

    videos: youtubeVideos(input: { pagination: { limit: 3 } }) {
      edges {
        node {
          id
          url
          title
          published
          thumbnail(input: { size: high })
        }
      }
    }
  }
  ... on SocialLinkable {
    socialLinks {
      provider
      url
      label
    }
  }
  ... on Inquirable {
    enableRmi
  }
}

`;
