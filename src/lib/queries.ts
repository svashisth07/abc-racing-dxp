import { gql } from 'graphql-request';

const pageQuery = gql`
  query PageQuery($locale: Locale!, $slug: String!) {
    page(where: { slug: $slug }, locales: [$locale, en]) {
      title
      subTitle
      hero {
        __typename
        video
        button {
          label
          slug
          href
        }
      }
      blocks {
        ... on LatestFixture {
          id
          title
          __typename
          fixtures {
            ... on Fixture {
              __typename
              id
              title
              thumbnail
              date
            }
          }
        }
        ... on Top5Driver {
          id
          title
          __typename
          drivers {
            ... on Driver {
              __typename
              id
              name
              team
              slug
              photo
            }
          }
        }
      }
    }
  }
`;

const seoQuery = gql`
  query PageQuery($locale: Locale!, $slug: String!) {
    page(where: { slug: $slug }, locales: [$locale, en]) {
      seo {
        title
        description
      }
    }
  }
`;

export { pageQuery, seoQuery };
