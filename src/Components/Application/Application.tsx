import React from "react";
import Header from '../../Components/Header';
import Navigation from '../../Components/Navigation';
import ItemsList from "../Search/ItemsList";

const Application = () => {

  return (
    <>
    <Header/>
    <Navigation/>
    <ItemsList/>
   </>
  );
}

export default Application;