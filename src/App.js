import React from 'react';
import './App.css'

import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom'
import Home from './Components/Home.jsx'
import JapanQueen from "./Components/JapanQueen"
import Gav from "./Components/Gav.jsx"





function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/JapanQueen" >
          <JapanQueen/>
        </Route>
        <Route path="/Gav" >
          <Gav/>
        </Route>
       
      </Switch>
    </div>
   
    </Router>
  );
}

export default App;