
import { Switch, Route } from "react-router-dom";

//pages
import Home from "pages/Home"; // "../../pages/Home"

import EventDetails from "pages/EventDetails";
import Navbar from "components/Navbar";
function App() {
  return (
    <div className="App">

      <Navbar/>

      <Switch>
       
        <Route path="/" exact component={Home}/>
        <Route path="/event-details/:id" component={EventDetails}/>
         
        
          
        
      </Switch>
    </div>
  );
}

export default App;
