const {GraphQLServer,PubSub} =require('graphql-yoga');
const {nanoid}= require("nanoid");
const {pubSub}= require("./pubSub");
const { users, events, locations, participants } = require("./data");

const typeDefs =`

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

  input EventUpdateInput{
      name: String
      location_id: ID
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

  type DeleteOutput {
      countOfDeletedItem:Int!
  }

  type Mutation {
      createUser(fullName:String!):User!
      updateUser(id:ID!,fullName:String!):User!
      deleteUser(id:ID!):User!
      deleteAllUsers:DeleteOutput!

      createEvent(name:String!,user_id:ID!,location_id:ID!):Event!
      updateEvent(id:ID!,data:EventUpdateInput!):Event!
      deleteEvent(id:ID!):Event!
      deleteAllEvents:DeleteOutput!

      createLocation(place:String!):Location!
      updateLocation(id:ID!,place:String!):Location!
      deleteLocation(id:ID!):Location!
      deleteAllLocations:DeleteOutput!

      createParticipant(event_id:ID!,user_id:ID!):Participant!
      updateParticipant(id:ID!,event_id:ID!):Participant!
      deleteParticipant(id:ID!):Participant!
      deleteAllParticipants:DeleteOutput!
  }

  type Subscription {
      userAdded:User!
      eventAdded:Event!
      participantAdded:Participant!

  }
`;

const resolvers = {
  Subscription:{
    userAdded:{
      subscribe:(_,args,{pubSub})=>{
       return pubSub.asyncIterator('userAdded');
      }
    },
    eventAdded:{
      subscribe: (_, args,{pubSub})=>{
        return pubSub.asyncIterator('eventAdded');

      }
    },
    participantAdded:{
      subscribe: (_, args,{pubSub})=>{
        return pubSub.asyncIterator('participantAdded');

      }
    }

    
  },
  Mutation:{
    createUser:(_, args,{pubSub})=>{

        const newUser={id:nanoid(),fullName:args.fullName}

        users.push(newUser);
        pubSub.publish('userAdded',{userAdded:newUser});
        return newUser;
    },
    updateUser:(_, {id,fullName})=>{

      const isExist=users.find(u=>u.id === id);

      if(isExist===-1){
        throw new Error('User not found')
      }

      const updatedUser=users[isExist]={...users[isExist],...fullName}
      return updatedUser;

    },
    deleteUser:(_, {id})=>{
      const isExist=users.find(u=>u.id === id);

      if(isExist===-1){
        throw new Error('User not found')
      }

      const deletedUser=users[isExist];

      users.splice(isExist, 1);

      return deletedUser;
    },
    deleteAllUsers:()=>{
      const length = users.length;

      users.splice(0,length);

      return {
        countOfDeletedItem:length
      }

    },


    createEvent:(_, {name,user_id,location_id})=>{
      
      const NewEvent={id:nanoid(),name,user_id,location_id}

      events.push(NewEvent);
      pubSub.publish('eventAdded',{eventAdded:NewEvent});
      return NewEvent;
    },
    updateEvent:(_,{id,data})=>{
      const isExist=events.find(e=>e.id === id);

      if(isExist===-1){
        throw new Error('User not found')
      }

      const updatedUser=events[isExist]={...events[isExist],...data}
      return updatedUser;
    },
    deleteEvent:(_, {id})=>{
      const isExist=events.find(e=>e.id === id);

      if(isExist===-1){
        throw new Error('Event not found')
      }

      const deletedEvent=events[isExist];

      events.splice(isExist, 1);

      return deletedEvent;
    },
    deleteAllEvents:()=>{
      const length = events.length;

      events.splice(0,length);

      return {
        countOfDeletedItem:length
      }

    },


    createLocation:(_, {place})=>{
      const NewLocation={id:nanoid(),place}

      locations.push(NewLocation);
      return NewLocation;
    },
    updateLocation:(_,{id,place})=>{
      const isExist=locations.find(u=>u.id === id);

      if(isExist===-1){
        throw new Error('Location not found')
      }

      const updatedLocation=locations[isExist]={...locations[isExist],...place}
      return updatedLocation;
    },
    deleteLocation:(_, {id})=>{
      const isExist=locations.find(l=>l.id === id);

      if(isExist===-1){
        throw new Error('Location not found')
      }

      const deletedLocation=locations[isExist];

      locations.splice(isExist, 1);

      return deletedLocation;
    },
    deleteAllLocations:()=>{
      const length = locations.length;

      locations.splice(0,length);

      return {
        countOfDeletedItem:length
      }

    },



    createParticipant:(_, {event_id,user_id})=>{

      const NewParticipant={id:nanoid(),user_id,event_id}

      participants.push(NewParticipant);

      pubSub.publish('participantAdded',{participantAdded:NewParticipant});
      return NewParticipant;
    },
    updateParticipant:(_,{id,event_id})=>{
      const isExist=participants.find(p=>p.id === id);

      if(isExist===-1){
        throw new Error('Participant not found')
      }

      const updatedParticipant=participants[isExist]={...participants[isExist],...event_id}
      return updatedParticipant;
    },
    deleteParticipant:(_, {id})=>{
      const isExist=participants.find(p=>p.id === id);

      if(isExist===-1){
        throw new Error('Participant not found')
      }

      const deletedParticipant=participants[isExist];

      participants.splice(isExist, 1);

      return deletedParticipant;
    },
    deleteAllParticipants:()=>{
      const length = participants.length;

      participants.splice(0,length);

      return {
        countOfDeletedItem:length
      }

    }

  },
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

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context:{pubSub}
});

server.start(({port})=>{console.log('Server is running on port : ',port)})