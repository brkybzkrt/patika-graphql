const Event= {
    user: (parent, args,{db}) => {
      return db.users.find((u) => u.id=== parent.user_id);
    },
    location: (parent,args,{db}) => {
      return db.locations.find((e) => e.id=== parent.location_id);
    },
    participants: (parent, args,{db}) => {
      return db.participants.filter((p) => p.event_id=== parent.id);
    }
}

module.exports.Event =Event;