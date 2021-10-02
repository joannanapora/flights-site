import React, {useState} from 'react';

const countries = [
    {
        name: 'Argentina',
        cities: ['Buenos Aires']
    },
    {
        name: 'Brasil',
        cities: ['Rio de Janeiro', 'Sao Paulo']
    },
    {
        name: 'China',
        cities: ['Beijing', 'Hong Kong']
    },
    {
        name: 'Denmark',
        cities: ['Copenhagen', 'Odense']
    },
    {
        name: 'Finland',
        cities: ['Helsinki']
    },
    {
        name: 'India',
        cities: ['Delhi', 'Kolkata', 'Mumbai']
    },
    {
        name: 'Norway',
        cities: ['Oslo']
    },
    {
        name: 'Poland',
        cities: ['Krakow', 'Warszawa']
    },
    {
        name: 'Russia',
        cities: ['Moscow']
    },
    {
        name: 'Ukraine',
        cities: ['Kiev', 'Odessa']
    },
]

interface ITravelTo {
    handleCityTo: (country:string, city:string) => void;
}


const TravelTo = ({handleCityTo}:ITravelTo) => {

    const [hoverCity, setHoverCity] = useState<string>('Argentina');

    const determineDisplayCities = () => {
      return  countries.map((country)=>{
            if (country.name === hoverCity) {
                return country.cities.map((city)=>{
                    return (
                        <label onClick={()=>handleCityTo(country.name, city)} className='text-xs w-1/2 p-2 text-gray-300 cursor-pointer hover:text-white w-full' >{city}</label>
                    )
                })
            }
        })
    }

    return (
        <div className='bg-gray-700 w-full rounded-lg lg:w-72 p-1 border-2 flex' >
           <div className='w-1/2 flex px-2 flex-col overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-white scrollbar-track-gray-600 h-72' >
                {countries.map((el) => {
                    return (
                        <label onMouseEnter={ ()=>setHoverCity(el.name)} className='text-xs w-1/2 p-2 text-gray-300 cursor-pointer hover:text-white hover w-full' >{el.name}</label>
                    )
                })}
            </div>
            <div className='w-1/2 flex px-2 flex-col overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-white scrollbar-track-gray-600 h-72' >
              {determineDisplayCities()}
            </div>
        </div>
    )
}

export default TravelTo;