import React from "react"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import StudentDetails from "./components/StudentDetails";




function App() {
  return (
   <Router>

     <div className="App">

     <Navbar/>

     <div className="content">

      <Switch>
        
        <Route exact path='/'>
          <Home/>
        </Route>  

        <Route path='/create'>
          <Create/>
        </Route>

        <Route path='/student-details/:id'>
          <StudentDetails/>
        </Route>
        

      </Switch> 

     </div> 

    </div>

     </Router>
  );
}

export default App;
