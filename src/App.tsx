import React from 'react';
import './App.css';
import "tailwindcss/tailwind.css"

import Header from './Components/Header';
import Navigation from './Components/Navigation';
import LandingPage from './Components/Landing Page';


function App() {
  return (
    <div className="bg-gray-800">
   
    <Header/>
    <Navigation/>
    <LandingPage/>

    </div>
  );
}

export default App;
