import { gql } from "@apollo/client";


export const ADD_NEW_EVENT = gql`

mutation createEvent(
    $user_id: ID!
    $location_id: ID!
    $name: String!
    $time: String!
    $description: String!
  ) {
    createEvent(
      user_id: $user_id
      location_id: $location_id
      name: $name
      time: $time
      description: $description
    ) {
      id
      name
      time
      description
    }
  }
`

export const GET_LOCATIONS= gql`

query getlocations {
    locations {
      id
      place
    }
  }

`

export const GET_USERS= gql`
query getUsers {
    users {
      id
      fullName
    }
  }

`


