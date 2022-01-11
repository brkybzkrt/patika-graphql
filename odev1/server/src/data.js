const users = [
    { id: "1", fullName: "Ahmet Berkay Bozkurt" },
    { id: "2", fullName: "Koray Avci" },
    { id: "3", fullName: "Ali Güneş" },
    { id: "4", fullName: "Hasan Güneş" },
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
    { id: "1", user_id: "1",location_id:"3",name:"Cinema Night",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", time:"on 21st of January", participants },
    { id: "2", user_id: "2",location_id:"2",name:"Playstation Game",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.", time:"Next Friday", participants },
    
  
    
  ];
 
  
  module.exports = { users, locations, events,participants };
  