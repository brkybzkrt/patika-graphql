const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { users, events, locations, participants } = require("./data");

const typeDefs = gql`
  type User {
    id: ID!
    fullName: String!
    events: [Event!]
  }

  type Event {
    id: ID
    user_id: ID
    user:User
    name: String
    location_id: ID
    location:Location!
    participants: [Participant!]
  }

  type Location {
    id: ID
    place: String!
  }

  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
  }

  type Query {

    users: [User!]
    user(id: ID!): User!

    events: [Event!]
    event(id: ID!): Event!

    locations: [Location!]
    location(id: ID!): Location!

    participants: [Participant!]
    participant(id: ID): Participant!
  }
`;

const resolvers = {
  Query: {
    user: (_, args) => {
      return users.find((user) => user.id === args.id);
    },
    users: () => {
      return users;
    },


    event:(_, args) => {
      return events.find((event) => event.id === args.id)
    },
    events: () => {
      return events;
    },

    location:(_, args) => {
      return locations.find((location) => location.id === args.id)
    },
    locations: () => {
      return locations;
    },

    participant:(_, args) => {
      return participants.find((participant) => participant.id === args.id)
    },
    participants: () => {
      return participants;
    },
    
  },
  User: {
    events: (parent) => {
      return events.filter((e) => e.user_id === parent.id);
    },
  },
  Event: {
      user: (parent) => {
        return users.find((u) => u.id=== parent.user_id);
      },
      location: (parent) => {
        return locations.find((e) => e.id=== parent.location_id);
      },
      participants: (parent) => {
        return participants.filter((p) => p.event_id=== parent.id);
      }
  }
 
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url} 🚀`);
});
