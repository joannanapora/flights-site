import React from "react";
import Register from "./Register/Login/Registration";
import { Switch ,Route } from "react-router-dom";


const LandingPage = () => {
    return (
          <Switch>
        <Route exact path='/login' component={Register} />
      </Switch>
    )
}

export default LandingPage;