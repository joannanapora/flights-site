import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Email, User, Password, SpinnerButton, Facebook,Google,Twitter } from '../../assets/svg';
import Header from '../../Components/Header';
import Navigation from '../../Components/Navigation';

const Application = () => {

  return (
    <>
    <Header/>
    <Navigation/>
   </>
  );
}

export default Application;