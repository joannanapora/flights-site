import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import Application from "./Components/Application/Application";
import { Switch ,Route } from "react-router-dom";


function App() {
  return (
    <div>
    <Switch>
        <Route exact path='/' component={Application} />
      </Switch>
    </div>
  );
}

export default App;
