import React, { useState } from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

interface IDeparture {
    handleDayClick: (day:string) => void;
    handleDatesClear: ()=>void;
    range: {from: string, to:string};
}

const Departure = ({handleDayClick, handleDatesClear, range}:any) => {

    const modifiers = { start: range.from, end: range.to };


    return (
        <div className='bg-white w-full rounded-lg h-auto lg:w-72 p-1 border-2 flex flex-col ' >
            <div className='h-72' >
                <div className="RangeExample">
                    <DayPicker
                        className="Selectable"
                        numberOfMonths={1}
                        selectedDays={[range.from, { from: range.from, to: range.to }]}
                        modifiers={modifiers}
                        onDayClick={handleDayClick}
                    />
                       {(range.from || range.to) && <button className='w-full flex justify-center' onClick={handleDatesClear}>reset</button>}
                    <Helmet>
                        <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
    font-size: 12px !important;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
    font-size: 12px !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
    font-size: 12px !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
    font-size: 12px !important;
  }
`}</style>
                    </Helmet>
                </div>
            </div>
        </div>
    )
}

export default Departure;