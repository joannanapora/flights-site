import React, { useState } from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

interface IDeparture {
    handleDayClick:any;
    range: {from: any, to:any};
}

const Departure = ({handleDayClick, range}:IDeparture) => {

    const modifiers = { start: range.from, end: range.to };


    return (
        <div className='bg-gray-700 w-full rounded-lg h-auto lg:w-72 p-2 border-2 flex flex-col ' >
            <div className='h-74  justify-center flex'>
                <div className="flex bg-white rounded-md flex-col">
                    <DayPicker
                        className="Selectable"
                        numberOfMonths={1}
                        selectedDays={[range.from, { from: range.from, to: range.to }]}
                        modifiers={modifiers}
                        onDayClick={handleDayClick}
                    />
                    <Helmet>
                        <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
    font-size: 12px !important;
    margin:0 !important;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
    font-size: 12px !important;
    padding-bottom: 2px;
    margin:0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
    font-size: 12px !important;
    margin:0 !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
    font-size: 12px !important;
    margin:0 !important;
  }
`}</style>
                    </Helmet>
                </div>
            </div>
        </div>
    )
}

export default Departure;