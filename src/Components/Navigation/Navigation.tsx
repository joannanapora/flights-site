import React, { Fragment, useState } from 'react';
import pawsss from '../../assets/pawsss.png';


const Navigation = () => {

    return (
<Fragment>
           <header className="text-gray-200 font-bold body-font shadow w-full">
               <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                   <nav className="flex lg:w-2/5 py-4 flex-wrap items-center text-base md:ml-auto">
                       <a
                           className="mr-5 cursor-pointer border-b border-transparent hover:border-white ">KOTKI DO ADOPCJI</a>
                       <a
                           className="mr-5 cursor-pointer border-b border-transparent hover:border-white ">WSPARCIE</a>
                            <a
                           className="mr-5 cursor-pointer border-b border-transparent hover:border-white ">FANPAGE</a>
                   </nav>
                   <a
                       className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
                       <img  src={pawsss}
                           alt="logo"/>
                   </a>
               </div>
           </header>
           </Fragment>
    );
};

export default Navigation;