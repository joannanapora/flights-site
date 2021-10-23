import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom"

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:flex md:w-full md:justify-evenly md:block">
                            <div className='flex items-baseline' >
                                <div className="flex p-2 w-72 border-2 space-x-4 rounded-lg">
                                <input className="flex-grow outline-none bg-gray-800 text-gray-100 w-52 pr-2 focus:text-white" type="text" placeholder="Search arti..." />
                                </div>
                                <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                                    <span>All categories</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div className="bg-gray-700 py-2 px-5 text-white rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                                    <span>Search</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div  className="hidden md:flex ml-2" >
                                <Link
                                    to='/login'
                                    className="bg-blue-500 flex py-2 px-5 text-white rounded-lg cursor-pointer"
                                    >
                                    Sign In
                                </Link>
                                        </div>
             

                    <div className="flex md:hidden justify-between w-full">
                 <div className="border-2 py-3 mr-10 px-3 flex justify-between rounde-md rounded-md">
      <input className="flex-grow outline-none bg-gray-800 text-gray-100 w-52 pr-2 focus:text-white" type="text" placeholder="Search..." />
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
    </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-4 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a
                                href="#"
                                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Dashboard
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Team
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Projects
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Calendar
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Reports
                            </a>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
};

export default Navigation;