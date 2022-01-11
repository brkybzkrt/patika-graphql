const Participant={

user:(parent, _,{db})=>{
   return db.users.find(u => u.id===parent.user_id);
}
}


module.exports.Participant= Participant;