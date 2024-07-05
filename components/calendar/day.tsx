"use client"

import {useState} from 'react'
import { DaysGrid, EventsData } from '@/types/EventCalendarTypes';
import moment from 'moment';
import {cn} from '@/lib/utils';
import EventCardMonth from '@/components/calendar/eventCardMonth';
import { IoAddCircle } from "react-icons/io5";
import ModalEvent from '@/components/calendar/modalEvent';


type Props = {
    index: number;
    daysGridLength: number;
    item: DaysGrid
    events?: EventsData
}

const sortEventsByTime = (events: EventsData) => {
    return events.sort((a, b) => moment(a.date).valueOf() - moment(b.date).valueOf());
};

function Day({index, daysGridLength, item, events}: Props) {

    //console.log("type of item:", item.date)

    const [showDialogue, setIShowDialogue] = useState<boolean>(false)

    const getWeekDays = () => {
        const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
        return days;
    }

    const weekDays = getWeekDays();

    const isSameDay = moment().isSame(item.date, 'day');

    const sortedEvents = sortEventsByTime(events);

  return (
    <div>
        <div>
            {index < 7 && (
                <p className="text-center">{weekDays[index]}</p>
            )}
        </div>
        <div className="h-48 border border-gray-300 p-2 group/item">
            <div className="flex justify-between">
                <span className={cn(isSameDay && 'text-white bg-blue-500 rounded-full px-2 py-1', 'text-right')}>{item.no}</span>
                <IoAddCircle 
                className="text-gray-300 text-3xl cursor-pointer group-hover/item:block hover:text-gray-400 transition-all ease-in-out duration-75"
                onClick={() => setIShowDialogue(true)}
                />
            </div>
            {/* Event dispaly */}
            <div>
                {sortedEvents?.map((event, index) => (
                    <EventCardMonth key={event.id} event={event} index={index}/>
                ))}
            </div>
        </div>
        {showDialogue && (
            <ModalEvent setIShowDialogue={setIShowDialogue} currentDate={item.date.format('YYYY MM DD')}/>
        )}
    </div>
  )
}

export default Day
