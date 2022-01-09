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
      subscribe: (_, args,{pubSub})=>{
        return pubSub.asyncIterator('participantAdded');

      }
    }

    
  };



module.exports.Subscription= Subscription;