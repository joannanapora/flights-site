import React, { useRef, useState } from "react";
import { DateUtils } from 'react-day-picker';
import { format } from 'date-fns';
import Dropdown from "../../Common/Dropdown";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface ITravel {
  fromCountry: string;
  fromCity: string;
  toCountry: string;
  toCity: string;
  departure: string;
  return: string;
}

interface IRange {
  from: any;
  to: any;
}


function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}


const Quotes = () => {

  const [way, setWay] = useState(true);
  const [range, setRange] = useState<IRange>({
    from: null,
    to: null
  });
  const [travel, setTravel] = useState<ITravel>({
    fromCountry: '',
    fromCity: '',
    toCountry: '',
    toCity: '',
    departure: '',
    return: '',
  });

  const [quote, setQuoteType] = useState('daycare')

  const setValueFrom = () => travel.fromCity ? `${travel.fromCity} (${travel.fromCountry})` : '';
  const setValueTo = () => travel.toCity ? `${travel.toCity} (${travel.toCountry})` : '';


  const searchTravel = () => {
    console.log('SEARCH TRAVEL')
  }

  const handleInput = (name: string) => {

  }

  const handleQuoteType = (quoteType:string) => {
    if (quoteType==='daycare') {
      setQuoteType('daycare')
    } else {setQuoteType('hotel')}
  }

      

  return (
    
      <div className='bg-gray-700 w-full md:mr-2 rounded-lg p-1 lg:w-72 border-2 flex flex-col' >
      <div className='flex w-full mb-2' >
        <button onClick={()=>handleQuoteType('daycare')}  className={`${quote === 'daycare' ? "bg-blue-500" : "bg-inherit" } p-1 cursor-pointer w-full text-sm text-white  active:bg-inherit outline-none focus:shadow-outline`} >Day Care</button>
        <button onClick={()=>handleQuoteType('hotel')}  className={`${quote === 'hotel' ? "bg-blue-500" : "bg-inherit" } p-1 cursor-pointer w-full text-sm text-white  active:bg-inherit outline-none focus:shadow-outline`} >Hotel</button>
      </div>
        <div className="flex items-end w-full rounded-sm" role="group">
          <button onClick={searchTravel} className="bg-blue-500 cursor-pointer hover:text-gray-300 w-full text-sm text-white border border-blue-500 p-2 mt-2  outline-none focus:shadow-outline" >Get Free Quote</button>
        </div>
      </div>
   
  )
}

export default Quotes;
