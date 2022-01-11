const Query ={

    
        user: (_, args,{db}) => {
          return db.users.find((user) => user.id === args.id);
        },
        users: (_,__,{db}) => {
          return db.users;
        },
    
    
        event:(_, args,{db}) => {
          return db.events.find((event) => event.id === args.id)
        },
        events: (_,__,{db}) => {
          return db.events;
        },
    
        location:(_, args,{db}) => {
          return db.locations.find((location) => location.id === args.id)
        },
        locations: (_,__,{db}) => {
          return db.locations;
        },
    
        participant:(_, args,{db}) => {
          return db.participants.find((participant) => participant.id === args.id)
        },
        participants: (_,{eventId},{db}) => {

          if(eventId){
             return db.participants.filter((participant) => participant.event_id === eventId);
          }
          return db.participants;
        },
        
    
}

module.exports.Query = Query;