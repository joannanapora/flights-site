import React, { useRef, useState } from "react";
import Passengers from "./Tabs/Passengers";
import TravelFrom from "./Tabs/TravelFrom";
import TravelTo from "./Tabs/TravelTo";
import Departure from "./Tabs/Departure";
import Return from "./Tabs/Return";

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
}

const SearchInputs = () => {

  const [way, setWay] = useState(true);
  const [openedTab, setTab] = useState('none');
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
  });

  const travellingToRef = useRef<HTMLInputElement>(null);


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

  const handleCityFrom = (country:string, city:string) => {
    setTravel({...travel, fromCountry: country, fromCity: city});
    travellingToRef.current?.focus();
    setTab('travelTo')
};
const handleCityTo = (country:string, city:string) => {
  setTravel({...travel, toCountry: country, toCity: city});
}


  const handleWayChoice = (ways: Boolean) => {
    if (ways) {
      setWay(false)
    } else {
      setWay(true);
      setTab('none')
    }
  }


  const displayTab = () => {
    if (openedTab === 'none')
      return

    if (openedTab === 'travelFrom') {
      return <TravelFrom  handleCityFrom={handleCityFrom} />
    }

    if (openedTab === 'travelTo') {
      return <TravelTo handleCityTo={handleCityTo} />
    }

    if (openedTab === 'passengers') {
      return <Passengers handlePassengers={handlePassengers} adults={passengers.adult} children={passengers.child} infants={passengers.infant} />
    }

    if (openedTab === 'departure') {
      return <Departure />
    }

    if (openedTab === 'return') {
      return <Return />
    }
  };

  const setValueFrom = () => travel.fromCity ? `${travel.fromCity} (${travel.fromCountry})` : '';
  const setValueTo = () => travel.toCity ? `${travel.toCity} (${travel.toCountry})` : '';

  const setTravelFrom = () => {
    setTab('travelFrom');
  };


  return (

    <div className={`flex justify-${openedTab === 'none' ? 'center' :'end'} sm:flex-row flex-col`}>
      <div className='bg-gray-700 w-full md:mr-2 rounded-lg p-1 lg:w-72 border-2 flex flex-col ' >
        <input onClick={setTravelFrom} placeholder="Travelling from" value={setValueFrom()} className='h-10 w-full mb-2 p-2 text-sm' /> 
        <input onClick={() => setTab('travelTo')} ref={travellingToRef} placeholder="Travelling to" value={setValueTo()} className='h-10 text-sm w-full mb-2 p-2' />
        <div onClick={() => setTab('passengers')} className='cursor-pointer h-10 text-sm text-gray-400 w-full mb-2 p-2 bg-white flex justify-between' >
          <p>Passengers:</p>
          <div className='text-xs font-bold text-black flex items-center w-full justify-evenly' >
            <p>{passengers.adult} adult</p>
            <p>{passengers.child} child</p>
            <p>{passengers.infant} infant</p>
          </div>
        </div>
        <input onClick={() => setTab('departure')} placeholder="Departure" className='cursor-pointer text-sm h-10 w-full mb-2 p-2' />
        <input onClick={() => setTab('return')} disabled={!way} placeholder={!way ? '' : 'Return'} className='h-10 text-sm w-full mb-2 p-2 cursor-pointer' />
        <div className="flex  w-full h-full items-end rounded-sm" role="group">
          <button onClick={() => handleWayChoice(true)} className={`bg-${!way ? `blue-500` : `white`} cursor-pointer w-full text-sm text-${way ? `blue-500` : `white`} border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline`}>One way</button>
          <button onClick={() => handleWayChoice(false)} className={`bg-${way ? `blue-500` : `white`} cursor-pointer w-full text-sm text-${!way ? `blue-500` : `white`} border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline`}>Return</button>
        </div>
      </div>
      {displayTab()}
    </div>
  )
}

export default SearchInputs;
