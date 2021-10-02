import React, {useState} from 'react';
import { MinusSvg } from '../../../assets/MinusSvg';
import { PlusSvg } from '../../../assets/PlusSvg';

interface IPassengers {
    handlePassengers: (passengerType:string) => void;
    adults: number;
    children: number;
    infants:number;
}

const Passengers = ({handlePassengers, adults, children, infants}:IPassengers) => {

    return (
      <div className='bg-gray-700 w-full lg:w-72 p-1 border-2 flex flex-col ' >
           <div className='overflow-auto h-72' >
        <label className='text-sm text-gray-300' >adult (14+)</label>
        <div className=' bg-white text-gray-500 font-serif cursor-pointer h-8 rounded-sm  w-full mb-2 flex items-center justify-between w-full' >
        <button disabled={adults<2} onClick={()=>handlePassengers('adult-1')} className='hover:bg-blue-200 h-full w-1/3 flex items-center justify-center'>
               <MinusSvg/>
              </button>
                <div className='w-1/3 flex justify-evenly'>
                    <div className='font-bold mr-2 items-center ' >{adults}</div></div>
                 <button onClick={()=>handlePassengers('adult+1')} className='hover:bg-blue-200 h-full w-1/3 flex items-center justify-center'>
               <PlusSvg/>
              </button>
            </div>
            <label className='text-sm text-gray-300' >child (2-14)</label>
        <div className=' bg-white text-gray-500 font-serif cursor-pointer h-8 rounded-sm  w-full mb-2 flex items-center justify-between w-full' >
        <button disabled={children<1} onClick={()=>handlePassengers('child-1')} className='hover:bg-blue-200 h-full w-1/3 flex items-center justify-center'>
               <MinusSvg/>
              </button>
                <div className='w-1/3 flex justify-evenly'>
                    <div className='font-bold mr-2 items-center ' >{children}</div></div>
                 <button onClick={()=>handlePassengers('child+1')} className='hover:bg-blue-200 h-full w-1/3 flex items-center justify-center'>
               <PlusSvg/>
              </button>
            </div>
            <label className='text-sm text-gray-300' >infant (0-2)</label>
        <div className=' bg-white text-gray-500 font-serif cursor-pointer h-8 rounded-sm  w-full mb-2 flex items-center justify-between w-full' >
        <button disabled={infants<1} onClick={()=>handlePassengers('infant-1')} className='hover:bg-blue-200 h-full w-1/3 flex items-center justify-center'>
               <MinusSvg/>
              </button>
                <div className='w-1/3 flex justify-evenly'>
                    <div className='font-bold mr-2 items-center ' >{infants}</div></div>
                 <button onClick={()=>handlePassengers('infant+1')} className='hover:bg-blue-200 h-full w-1/3 flex items-center justify-center'>
               <PlusSvg/>
              </button>
            </div>
            <div className="flex w-full h-18 items-end rounded-sm">
                    <button onClick={()=>handlePassengers('reset')} className="cursor-pointer w-full align-left font-serif text-xs text-white px-4 py-2 mx-0 outline-none focus:shadow-outline" >RESET</button>
                </div>
                </div>
        </div>
    )
}

export default Passengers;