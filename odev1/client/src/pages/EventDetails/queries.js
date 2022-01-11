import { gql } from "@apollo/client";

export const GET_EVENT_DETAILS= gql` 

query getEventDetail($id: ID!) {
  event(id: $id) {
    user {
      fullName
    }
    name
    time
    description
    location {
      place
    }
    participants {
      user_id
    }
  }
}

`

export const GET_EVENT_PARTICIPANTS= gql` 

query participants($eventId: ID) {
  participants(eventId: $eventId) {
    user_id
    user {
      fullName
    }
  }
}

`

