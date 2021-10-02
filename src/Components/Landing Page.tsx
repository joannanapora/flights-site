import React from "react";
import Search from "./Search/Search";
import Divider from "./Divider";
import LeftWing from "./LeftWing";
import RightWing from './RightWing';
import Centrum from './Centrum';


const LandingPage = () => {
    return (
      
      <div className="flex flex-wrap">
            <div className='flex w-full'>
                <Search/>
            </div>
            <div className='flex w-full'>
                <Divider/>
            </div>
  <div id='left-wing' className='w-1/4' >
        <LeftWing/>
  </div>
  <div id='right-wing' className='w-2/4' >
        <Centrum/>
  </div>
  <div id='right-wing' className='w-1/4' >
        <RightWing/>
  </div>
</div>
    )
}

export default LandingPage;