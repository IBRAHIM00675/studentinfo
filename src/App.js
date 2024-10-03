import React from "react"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Create from "./components/Create";




function App() {
  return (
   <Router>

     <div className="App">

     <Navbar/>

     <div className="content">

      <Switch>
        
        {/* <Route exact path='/'>
          <Home/>
        </Route>   */}
        <Route path='/create'>
          <Create/>
        </Route>



      </Switch> 

     </div> 

    </div>

     </Router>
  );
}

export default App;
