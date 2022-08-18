export const GET_LADING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          logo {
            data {
              attributes {
                alternativeText

                url
              }
            }
          }
        }
      }
    }
  }
`
