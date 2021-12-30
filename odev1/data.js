const users = [
    { id: "1", fullName: "Ahmet Berkay Bozkurt" },
    { id: "2", fullName: "Koray Avcı" },
    { id: "3", fullName: "Ali Güneş" },
    { id: "3", fullName: "Hasan Güneş" },
  ];
  const locations = [
    { id: "1",  place: "Toronto" },
    { id: "2",  place: "İstanbul" },
    { id: "3",  place: "New York" },
  ];

  const participants = [
    { id: "1", event_id: "1",user_id: "1"  },
    { id: "2", event_id: "2",user_id: "2"  },
    { id: "3", event_id: "1",user_id: "3" },
    { id: "4", event_id: "2",user_id: "4" },
    
  ];
  const events = [
    { id: "1", user_id: "1",location_id:"3",name:"Cinema Night", participants },
    { id: "2", user_id: "2",location_id:"2",name:"Playstation Game", participants },
    
  
    
  ];
 
  
  module.exports = { users, locations, events,participants };
  