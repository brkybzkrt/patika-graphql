const Query ={

    
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
        
    
}

module.exports.Query = Query;