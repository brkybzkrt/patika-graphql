const {GraphQLServer,PubSub} =require('graphql-yoga');
const resolvers=require('./graphql/resolvers');
const typeDefs=require('./graphql/type-defs');
const {pubSub}= require("./pubSub");
const data = require("./data");




const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context:{pubSub,data}
});


server.start(({port})=>{console.log('Server is running on port : ',port)})