const {GraphQLServer,PubSub} =require('graphql-yoga');
const resolvers=require('./graphql/resolvers');
const typeDefs=require('./graphql/type-defs');
const {pubSub}= require("./pubSub");
const db = require("./data");


let deneme;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context:{pubSub,db}
});

server.start(({port})=>{console.log('Server is running on port : ',port)})