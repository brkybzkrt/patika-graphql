const {withFilter} =require('graphql-yoga');
const Subscription={
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
      subscribe: withFilter( (_, args,{pubSub})=> pubSub.asyncIterator('participantAdded'),
        (payload,variables)=>{
          return variables.event_id? payload.participantAdded.event_id===variables.event_id: true;

        })

      }
    }
  



module.exports.Subscription= Subscription;