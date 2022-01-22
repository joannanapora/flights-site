import React, { Fragment } from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import { Switch ,Route } from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import CatCard from './Components/CatCard/CatCard';


function App() {
  return (
    <Fragment>
       <Navigation/>
    <Switch>
        <Route exact path='/' component={CatCard} />
      </Switch>
    </Fragment>
  );
}

export default App;
