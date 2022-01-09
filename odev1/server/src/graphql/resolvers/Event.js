const Event= {
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

module.exports.Event =Event;