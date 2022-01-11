import { gql } from "@apollo/client";


export const GET_EVENTS = gql`
query getEvents {
  events {
    id
    name
    description
    time

  }
}
`;





