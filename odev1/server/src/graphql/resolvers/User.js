const User= {
    events: (parent) => {
      return events.filter((e) => e.user_id === parent.id);
    },
  }

module.exports.User =User;