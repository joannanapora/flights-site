import React, { useRef, useState } from "react";
import Passengers from "./Tabs/Passengers";
import TravelFrom from "./Tabs/TravelFrom";
import TravelTo from "./Tabs/TravelTo";
import Departure from "./Tabs/Departure";
import { DateUtils } from 'react-day-picker';
import { format } from 'date-fns';

interface IPassengers {
  adult: number;
  child: number;
  infant: number;
}

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

const SearchInputs = () => {

  const [way, setWay] = useState(true);
  const [openedTab, setTab] = useState('none');
  const [range, setRange] = useState<IRange>({
    from: null,
    to: null
  });
  const [passengers, setPassengers] = useState<IPassengers>({
    adult: 1,
    child: 0,
    infant: 0
  });
  const [travel, setTravel] = useState<ITravel>({
    fromCountry: '',
    fromCity: '',
    toCountry: '',
    toCity: '',
    departure: '',
    return: '',
  });

  const travellingToRef = useRef<HTMLInputElement>(null);
  const departureRef = useRef<HTMLInputElement>(null);


  const handlePassengers = (passengerType: string) => {

    if (passengerType === 'adult-1') {
      setPassengers({ ...passengers, adult: passengers.adult - 1 })
    }
    if (passengerType === 'adult+1') {
      setPassengers({ ...passengers, adult: passengers.adult + 1 })
    }
    if (passengerType === 'child-1') {
      setPassengers({ ...passengers, child: passengers.child - 1 })
    }
    if (passengerType === 'child+1') {
      setPassengers({ ...passengers, child: passengers.child + 1 })
    }
    if (passengerType === 'infant-1') {
      setPassengers({ ...passengers, infant: passengers.infant - 1 })
    }
    if (passengerType === 'infant+1') {
      setPassengers({ ...passengers, infant: passengers.infant + 1 })
    }
    if (passengerType === 'reset') {
      setPassengers({
        adult: 1,
        child: 0,
        infant: 0
      })
    }
  };

  const handleCityFrom = (country: string, city: string) => {
    setTravel({ ...travel, fromCountry: country, fromCity: city });
    travellingToRef.current?.focus();
    setTab('travelTo')
  };
  const handleCityTo = (country: string, city: string) => {
    setTravel({ ...travel, toCountry: country, toCity: city });
    departureRef.current?.focus();
    setTab('departure')
  };


  const handleDayClick = (day: any) => {
    const dateRange = DateUtils.addDayToRange(day, range);
    setRange(dateRange);
  }


  const handleWayChoice = (ways: Boolean) => {
    if (ways) {
      setWay(false);
      setRange(range.from && { ...range, to: range.from })
    } else {
      setWay(true);
      setTab('departure');
    }
  }

  const displayTab = () => {
    if (openedTab === 'none')
      return

    if (openedTab === 'travelFrom') {
      return <TravelFrom handleCityFrom={handleCityFrom} />
    }

    if (openedTab === 'travelTo') {
      return <TravelTo handleCityTo={handleCityTo} />
    }

    if (openedTab === 'passengers') {
      return <Passengers handlePassengers={handlePassengers} adults={passengers.adult} children={passengers.child} infants={passengers.infant} />
    }

    if (openedTab === 'departure') {
      return <Departure handleDayClick={handleDayClick} range={range} />
    }
  };

  const setValueFrom = () => travel.fromCity ? `${travel.fromCity} (${travel.fromCountry})` : '';
  const setValueTo = () => travel.toCity ? `${travel.toCity} (${travel.toCountry})` : '';

  const setTravelFrom = () => {
    setTab('travelFrom');
  };

  const searchTravel = () => {
    console.log('SEARCH TRAVEL')
  }

  const handleInput = (name: string) => {

  }

  return (

    <div className={`flex justify-${openedTab === 'none' ? 'center' : 'end'} sm:flex-row h-72 flex-col`}>
      <div className='bg-gray-700 w-full h-72 md:mr-2 rounded-lg p-1 lg:w-72 border-2 flex flex-col' >
        <input onChange={() => handleInput('travelFrom')} onClick={setTravelFrom} placeholder="Travelling from" value={setValueFrom()} className='h-10 w-full mb-2 p-2 text-sm' />
        <input onChange={() => handleInput('travelTo')} onClick={() => setTab('travelTo')} ref={travellingToRef} placeholder="Travelling to" value={setValueTo()} className='h-10 text-sm w-full mb-2 p-2' />
        <input readOnly value={`${passengers.adult} adult, ${passengers.child} child, ${passengers.infant} infant`} onClick={() => setTab('passengers')} className='cursor-pointer text-sm h-10 w-full mb-2 p-2' />
        <input readOnly onClick={() => setTab('departure')} ref={departureRef} value={range.from ? format(range.from, 'dd MMMM yyyy') : ''} placeholder="Departure" className='cursor-pointer text-sm h-10 w-full mb-2 p-2' />
        {!way ? <div className='h-10 w-full mb-2 p-2' ></div> :
          <input readOnly onClick={() => setTab('departure')} value={range.to ? format(range.to, 'dd MMMM yyyy') : ''} placeholder={!way ? '' : 'Return'} className='h-10 text-sm w-full mb-2 p-2 cursor-pointer' />
        }
        <div className="flex w-full rounded-sm" role="group">
          <button onClick={() => handleWayChoice(true)} className={`bg-${!way ? `blue-400` : `white`} cursor-pointer w-full text-sm text-${way ? `blue-400` : `white`} border border-blue-500  outline-none focus:shadow-outline`}>One way</button>
          <button onClick={() => handleWayChoice(false)} className={`bg-${way ? `blue-400` : `white`} cursor-pointer w-full text-sm text-${!way ? `blue-400` : `white`} border border-blue-500 outline-none focus:shadow-outline`}>Return</button>
        </div>
        <div className="flex items-end w-full rounded-sm" role="group">
          <button onClick={searchTravel} className="bg-blue-500 cursor-pointer w-full text-sm text-white border border-blue-500 p-2 mt-2  outline-none focus:shadow-outline" >Search</button>
        </div>
      </div>
      {displayTab()}
    </div>
  )
}

export default SearchInputs;
