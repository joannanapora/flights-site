import React from 'react';
import { Time, Tag, Location, Pause, Left, Right } from "../../assets/svg";

interface ItemCard {
    added: string;
    name: string;
    category: string[];
    location: string;
    queue: number;
    image: any;
    transport: string;
    timeLeft: string;
}

const ItemCard = ({ added, name, category, location, queue, image, transport, timeLeft }: ItemCard) => {

    const displayButtonText = () => {
        if (queue === 0) {
            return "RESERVE NOW"
        }
        return "STAND IN QUEUE"
    }

    return (
        <div className='border-4 mb-2 rounded-md border-white'>
        <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2  p-4 gap-4 bg-gray-200 ">
            <div id='IMAGE' className="flex justify-center ">
                <Left/>
                <img className="w-44 rounded-xl" src={image} alt="Colors" />
                <Right/>
            </div>
            <div id='DESCRIPTION' className="flex w-full flex-col justify-evenly items-center">
                <h1 className="mb-2 flex w-full justify-center md:justify-start text-xl font-bold cursor-pointer">{name}</h1>
<div className='flex flex-col w-full items-center md:items-start justify-start'>
                <div className="flex space-x-1 items-center my-1.5 text-gray-500 ">
                    <Time />
                    <p>Added: <strong>{added}</strong></p>
                </div>

                <div className="flex space-x-1 items-center my-1.5 text-gray-500 ">
                    <Tag />
                  
                        Category:
                        {category.map((el) =>
                            <strong className='mx-1'>{el}</strong>)}
                  
                </div>
                    <div className="flex space-x-1 items-center my-1.5 text-gray-500 ">
                        <Location />
                        <p>Location: <strong>{location}</strong></p>
                    </div>
                    <div className="flex space-x-1 items-center my-1.5 text-gray-500 ">
                        <Pause />
                        <p>People in queue: <strong>{queue}</strong></p>
                    </div>
                    </div>

            </div>
            <div id='BUTTON' className="hidden md:flex  flex-col">
                <div className="flex space-x-1 justify-end items-center my-1 ">

                    <p>Collection: <strong>{transport}</strong></p>
                </div>
                <div className="flex space-x-1 items-center justify-end my-1 ">

                    <p>Time remaining: <strong>{timeLeft}</strong></p>
                </div>
                <button className="text-md text-white bg-blue-400 p-4 mt-14 rounded-md shadow-lg">{displayButtonText()}</button>
            </div>
        </div>
        <div id='BUTTON' className="md:hidden w-full bg-gray-200 flex flex-col">
                <div className="flex space-x-1 justify-evenly flex-col sm:flex-row flex items-center my-1 ">
                    <p>Collection: <strong>{transport}</strong></p>
                    <p>Time remaining: <strong>{timeLeft}</strong></p>
                </div>
                <button className="text-md text-white bg-blue-400 p-4 mt-4 shadow-lg">{displayButtonText()}</button>
            </div>
        </div>

    )
}

export default ItemCard;

