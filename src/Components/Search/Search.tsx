import React from "react";
import Advertises from "./Advertises";
import SearchInputs from "./NewTravelBox";

const countries = [
    {
        id: '1',
        name: 'Poland',
        cities: ['Warszawa', 'Poznan', 'Wroclaw', 'Krakow']
    },
    {
        id: '2',
        name: 'Spain',
        cities: ['Madrit', 'Barcelona', 'Santa Susanna']
    }
]

const Search = () => {
    return (
        <div className='bg-clouds-image m-2 bg-cover w-full h-auto'>
         <div className="max-w-7xl mx-auto px-2 flex lg:flex-row flex-col md:items-center ">
            <div className='w-full sm:my-2 lg:w-1/2' >
                   <SearchInputs/>
            </div>
            <div className='w-full sm:mb-2 lg:w-1/2' >
                   <Advertises/>
            </div>
        </div>
        </div>
    )
}

export default Search;
