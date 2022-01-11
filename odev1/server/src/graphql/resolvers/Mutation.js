const Mutation={
    createUser:(_, args,{pubSub,db})=>{

        const newUser={id:nanoid(),fullName:args.fullName}

        db.users.push(newUser);
        pubSub.publish('userAdded',{userAdded:newUser});
        return newUser;
    },
    updateUser:(_, {id,fullName,db})=>{

      const isExist=db.users.find(u=>u.id === id);

      if(isExist===-1){
        throw new Error('User not found')
      }

      const updatedUser=db.users[isExist]={...db.users[isExist],...fullName}
      return updatedUser;

    },
    deleteUser:(_, {id},{db})=>{
      const isExist=db.users.find(u=>u.id === id);

      if(isExist===-1){
        throw new Error('User not found')
      }

      const deletedUser=db.users[isExist];

      db.users.splice(isExist, 1);

      return deletedUser;
    },
    deleteAllUsers:(_,__,{db})=>{
      const length = db.users.length;

      db.users.splice(0,length);

      return {
        countOfDeletedItem:length
      }

    },


    createEvent:(_, {name, user_id, location_id, description, time},{db})=>{
      
      const NewEvent={id:nanoid(),name,user_id,location_id,description,time}

      db.events.push(NewEvent);
      pubSub.publish('eventAdded',{eventAdded:NewEvent});
      return NewEvent;
    },
    updateEvent:(_,{id,data},{db})=>{
      const isExist=db.events.find(e=>e.id === id);

      if(isExist===-1){
        throw new Error('User not found')
      }

      const updatedUser=db.events[isExist]={...db.events[isExist],...data}
      return updatedUser;
    },
    deleteEvent:(_, {id},{db})=>{
      const isExist=db.events.find(e=>e.id === id);

      if(isExist===-1){
        throw new Error('Event not found')
      }

      const deletedEvent=db.events[isExist];

      db.events.splice(isExist, 1);

      return deletedEvent;
    },
    deleteAllEvents:(_,__,{db})=>{
      const length = db.events.length;

      db.events.splice(0,length);

      return {
        countOfDeletedItem:length
      }

    },


    createLocation:(_, {place},{db})=>{
      const NewLocation={id:nanoid(),place}

      db.locations.push(NewLocation);
      return NewLocation;
    },
    updateLocation:(_,{id,place},{db})=>{
      const isExist=db.locations.find(u=>u.id === id);

      if(isExist===-1){
        throw new Error('Location not found')
      }

      const updatedLocation=db.locations[isExist]={...db.locations[isExist],...place}
      return updatedLocation;
    },
    deleteLocation:(_, {id},{db})=>{
      const isExist=db.locations.find(l=>l.id === id);

      if(isExist===-1){
        throw new Error('Location not found')
      }

      const deletedLocation=db.locations[isExist];

      db.locations.splice(isExist, 1);

      return deletedLocation;
    },
    deleteAllLocations:(_,__,{db})=>{
      const length = db.locations.length;

      db.locations.splice(0,length);

      return {
        countOfDeletedItem:length
      }

    },



    createParticipant:(_, {event_id,user_id},{db})=>{

      const NewParticipant={id:nanoid(),user_id,event_id}

      db.participants.push(NewParticipant);

      pubSub.publish('participantAdded',{participantAdded:NewParticipant});
      return NewParticipant;
    },
    updateParticipant:(_,{id,event_id},{db})=>{
      const isExist=db.participants.find(p=>p.id === id);

      if(isExist===-1){
        throw new Error('Participant not found')
      }

      const updatedParticipant=db.participants[isExist]={...db.participants[isExist],...event_id}
      return updatedParticipant;
    },
    deleteParticipant:(_, {id},{db})=>{
      const isExist=db.participants.find(p=>p.id === id);

      if(isExist===-1){
        throw new Error('Participant not found')
      }

      const deletedParticipant=db.participants[isExist];

      db.participants.splice(isExist, 1);

      return deletedParticipant;
    },
    deleteAllParticipants:(_,__,{db})=>{
      const length = db.participants.length;

      db.participants.splice(0,length);

      return {
        countOfDeletedItem:length
      }

    }

  }

module.exports.Mutation= Mutation;