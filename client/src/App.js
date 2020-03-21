import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Link to="/bubble-page/colors">Private Route</Link>
      <div className="App">
        <Link to="/login">Login</Link>
        <td> >> </td>
        <Link to="/logout">Logout</Link>
        <Switch>
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/bubble-page" component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
