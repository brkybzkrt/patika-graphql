
import { Switch, Route } from "react-router-dom";

//pages
import Home from "pages/Home"; // "../../pages/Home"

import EventDetails from "pages/EventDetails";
import Navbar from "components/Navbar";
import AddNewEvent from "pages/AddNewEvent";
function App() {
  return (
    <div className="App">

      <Navbar/>

      <Switch>
       
        <Route path="/" exact component={Home}/>
        <Route path="/event-details/:id" component={EventDetails}/>
        <Route path="/addNewEvent" component={AddNewEvent}/>
        
          
        
      </Switch>
    </div>
  );
}

export default App;
