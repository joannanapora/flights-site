import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom"
import {ArrowDown, Loop} from "../assets/svg";

const Navigation = () => {

    interface ICategory {
        name:string; 
        id:number; 
        picked:boolean
    }

    const [isOpen, setIsOpen] = useState<string>("");
    
    const categories:ICategory[] = [
        {
        name: "Furniture",
        id: 1,
        picked: false
    },
    {
        name: "Toys",
        id: 2,
        picked: false
    },
    {
        name: "Clothes",
        id: 3,
        picked: false
    },

]
    const [categoryList, setCategoryList] =  useState<ICategory[]>(categories);

    const handlePickingCategory = (category:string) => {
        const newList:ICategory[] = categoryList.map((el)=>{
            if (el.name === category) {
                return {...el, picked: !el.picked}
            }
            return el
        })
        setCategoryList(newList);
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden flex w-full md:flex md:w-full md:justify-evenly md:block">
                        <div className="border-2 py-3 mr-2 px-3 flex justify-between rounde-md rounded-md">
      <input className="flex-grow w-68 outline-none bg-gray-800 text-gray-100 pr-2 border-r-2 focus:text-white" type="text" placeholder="Search..." />
      <span className='pl-2'>
        <Loop/>
      </span>
    </div>
    <div onClick={()=>setIsOpen(isOpen === 'cat' ? '' : 'cat')} className='flex'>
    <div className='text-gray-500 ml-2 font-semibold items-center flex' >All Categories</div>
    <div className="flex text-gray-500 ml-2 items-center cursor-pointer">                            
                                   <div className='w-full flex' >
                                   <ArrowDown  />
                                   </div>
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
                 <div className="border-2 py-3 mr-2 px-3 flex justify-between rounde-md rounded-md">
      <input className="flex-grow border-r-2 outline-none w-1/2 bg-gray-800 text-gray-100 pr-2 focus:text-white" type="text" placeholder="Search..." />
      <span className='pl-2'>
        <Loop/>
      </span>
    </div>
    <div className="flex text-gray-500 mr-2 w-1/4 font-semibold text-sm items-center hover:text-white cursor-pointer">                            
                                   <div className='w-full'    onClick={()=>setIsOpen(isOpen === 'cat' ? '' : 'cat')} >
                                   <ArrowDown  />
                                   </div>
                                </div>
                        <button
                           onClick={()=>setIsOpen(isOpen === 'menu' ? '' : 'menu')}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center w-1/4 p-4 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen !== 'menu' ? (
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
                show={isOpen === "menu"}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref1) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref1} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                                    to='/login'
                                    className="flex py-2 px-5 text-white rounded-lg cursor-pointer w-full justify-center"
                                    >
                                    Sign In
                                </Link>
                        </div>
                    </div>
                )}
            </Transition>
            <Transition
                 show={isOpen === "cat"}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref2) => (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t-2 mt-1 bg-gray-100">
                        <div ref={ref2} className="px-2 pt-2 pb-3 flex flex-wrap sm:px-3">
                            {categoryList.map((el)=>
                        <p key={el.id} onClick={()=>handlePickingCategory(el.name)} className={`${el.picked ? 'bg-blue-500' :'bg-gray-800'} flex py-4 px-8 mx-1 text-white rounded-lg cursor-pointer`} >{el.name}</p>
                            )}
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
};

export default Navigation;