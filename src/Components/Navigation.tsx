import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom"
import { ArrowDown, Loop, Hamburger, CloseMenu, Location } from "../assets/svg";

const Navigation = () => {

    interface ICategory {
        name: string;
        id: number;
        picked: boolean;
    }

    const [isOpen, setIsOpen] = useState<string>('');
    const [searchPhrase, setSearchPhrase] = useState<string>('');
    const [location, setSearchLocation] = useState<string>('');

    const categories: ICategory[] = [
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
        {
            name: "Cosmetics",
            id: 4,
            picked: false
        },
        {
            name: "Food",
            id: 5,
            picked: false
        },
        {
            name: "Pets",
            id: 6,
            picked: false
        },
        {
            name: "Electronic",
            id: 7,
            picked: false
        },
        {
            name: "Children",
            id: 8,
            picked: false
        },

    ].sort((a, b) => a.name.localeCompare(b.name))

    const [categoryList, setCategoryList] = useState<ICategory[]>(categories);

    const handlePickingCategory = (category: string) => {
        const newList: ICategory[] = categoryList.map((el) => {
            if (el.name === category) {
                return { ...el, picked: !el.picked }
            }
            return el
        })

        setCategoryList(newList);
    };

    const handleSearchPhrase = (e: any) => {
        setSearchPhrase(e.target.value);
    }

    const handleSearchLocation = (e: any) => {
        setSearchLocation(e.target.value);
    }

    const displayCategoryText = () => {
        if (searchPhrase) {
            return <p>Looking for <strong className='text-xl' >{searchPhrase}</strong> in
                category:</p>
        } else return <p>I am looking for <strong>anything</strong> in category:</p>
    }


    const displayLocationText = () => {
        return (
            <>
            <p>In location:</p>
            <div className="border-2 border-black py-3 mr-2 px-3 flex justify-between rounde-md rounded-md">
            <input value={location} onChange={(e) => { handleSearchLocation(e) }} className="flex-grow w-40 outline-none bg-gray-100 text-black pr-2 border-r-2 border-black " type="text" placeholder="Search item..." />
            <span className='pl-2'>
                <Location />
            </span>
        </div>
        </>
        )
    }

    const startSearch = () => {
        console.log('START SEARCH')
        setIsOpen('')
        setSearchPhrase('')
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden flex w-full md:flex md:w-full md:justify-evenly md:block">
                            <div className="border-2 py-3 mr-2 px-3 flex justify-between rounde-md rounded-md">
                                <input value={searchPhrase} onChange={(e) => { handleSearchPhrase(e) }} className="flex-grow w-72 outline-none bg-gray-800 text-gray-100 pr-2 border-r-2 focus:text-white" type="text" placeholder="Search item..." />
                                <span onClick={startSearch} className='pl-2'>
                                    <Loop />
                                </span>
                            </div>
                            <div onClick={() => setIsOpen(isOpen === 'cat' ? '' : 'cat')} className='flex'>
                                <div className='text-gray-500 ml-2 font-semibold items-center flex' >Filters</div>
                                <div className="flex text-gray-500 ml-2 items-center cursor-pointer">
                                    <div className='w-full flex' >
                                        <ArrowDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex ml-2" >
                        <Link
                            to='/login'
                            className="bg-blue-500 flex py-2 px-5 text-white rounded-lg cursor-pointer"
                        >
                            Sign In
                        </Link>

                    </div>

                    <div className="flex md:hidden justify-between w-full">
                        <div className="border-2 py-3 mr-2 px-3 flex justify-between rounde-md rounded-md">
                            <input value={searchPhrase} onChange={(e) => { handleSearchPhrase(e) }} className="flex-grow border-r-2 outline-none w-1/2 bg-gray-800 text-gray-100 pr-2 focus:text-white" type="text" placeholder="Search..." />
                            <span className='pl-2'>
                                <Loop />
                            </span>
                        </div>
                        <div className="flex text-gray-500 mr-2 w-1/4 font-semibold text-sm items-center hover:text-white cursor-pointer">
                            <div className='w-full' onClick={() => setIsOpen(isOpen === 'cat' ? '' : 'cat')} >
                                <ArrowDown />
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(isOpen === 'menu' ? '' : 'menu')}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center w-1/4 p-4 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen !== 'menu' ? (
                                <Hamburger />
                            ) : (
                                <CloseMenu />
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

                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to='/login'
                            className="flex py-2 px-5 text-white rounded-lg cursor-pointer w-full justify-center"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>

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
                <div className='w-full bg-gray-100' >
                    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t-2 mt-1 ">
                        <div className="px-2 pt-2 pb-3 flex flex-wrap sm:px-3">
                            <p className='w-full font-semibold lg:text-lg text-md p-2' >{displayCategoryText()}</p>
                            {categoryList.map((el) =>
                                <p key={el.id} onClick={() => handlePickingCategory(el.name)} className={`${el.picked ? 'bg-blue-500' : 'bg-gray-800'} flex lg:py-4 py-2 m-1 lg:px-8 px-4 mx-1 text-white rounded-lg cursor-pointer`} >{el.name}</p>
                            )}
                            <p className='w-full font-semibold lg:text-lg text-md p-2' >{displayLocationText()}</p>
                            <button onClick={startSearch} className='w-full my-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-400 bg-gray-300'>SEARCH</button>
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    );
};

export default Navigation;