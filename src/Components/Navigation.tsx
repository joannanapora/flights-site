import React, { Fragment, useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom"
import { Hamburger, CloseMenu } from "../assets/svg";
import pawsss from '../assets/pawsss.png';


const Navigation = () => {

    interface ICategory {
        name: string;
        id: number;
        picked: boolean;
    }

    const [isOpen, setIsOpen] = useState<string>('');
    const [searchPhrase, setSearchPhrase] = useState<string>('');
    const [location, setSearchLocation] = useState<string>('');


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
                   {/* <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                       <div className="text-gray-800 font-bold ml-4 py-4 px-3 rounded-lg">
                           Kontakt
                       </div>
                   </div> */}
               </div>
           </header>
           </Fragment>
    );
};

export default Navigation;