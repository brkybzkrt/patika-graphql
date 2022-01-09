const User= {
    events: (parent,__,{db}) => {
      return db.events.filter((e) => e.user_id === parent.id);
    },
  }

module.exports.User =User;