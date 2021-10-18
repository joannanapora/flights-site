import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import Register from "./Components/Register/Registration";
import Application from "./Components/Application/Application";
import { Switch ,Route } from "react-router-dom";


function App() {
  return (
    <div className="bg-gray-800">
    <Switch>
        <Route exact path='/login' component={Register} />
        <Route exact path='/' component={Application} />
      </Switch>
    </div>
  );
}

export default App;
