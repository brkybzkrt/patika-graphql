const Mutation={
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

  }

module.exports.Mutation= Mutation;