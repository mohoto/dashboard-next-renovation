"use client"
import React from 'react'
import ControlsMonth from '@/components/calendar/controlsMonth'
import useEventCalendarMonth from '@/hooks/useEventCalendarMonth'
import Day from '@/components/calendar/day'
import ExtraDays from '@/components/calendar/extraDays'
import { EventsData } from '@/types/EventCalendarTypes'

type Props = {
  data: EventsData;
  onDataChange: (events: EventsData) => void;
}

function EventCalendarMonth({data, onDataChange}: Props) {

const {date, changeMonth, daysGrid} = useEventCalendarMonth(); 
  return (
    <div>
      <ControlsMonth changeMonth={changeMonth} date={date}/>
      <div className="grid grid-cols-7">
        {daysGrid.map((item, index) => item?.no ? 
          (
            <Day 
            key={index} 
            daysGridLength={daysGrid.length} 
            item={item} 
            index={index}
            events={data.filter(d => item.date.isSame(d.date, 'day') )} />) 
        : (
            <ExtraDays 
            key={index} 
            daysGridLength={daysGrid.length} 
            index={index}/>
          )
        )}
        {/* {daysGrid.map((item, index) => item?.no ? (
          <Day key={index} daysGridLength={daysGrid.length} item={item} index={index}/>
        ) : null)} */}
      </div>
    </div>
  )
}

export default EventCalendarMonth

