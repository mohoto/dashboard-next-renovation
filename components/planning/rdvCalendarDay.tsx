"use client"
import {useState} from 'react';
import { EventsData } from '@/types/EventCalendarTypes'
import moment from 'moment';
import useEventCalendarDay from '@/hooks/useEventCalendarDay';
import RdvCardWeek from '@/components/planning/rdvCardMonth';
import { IoAddCircle } from "react-icons/io5";
import ModalRdv from '@/components/planning/modalRdv';
import ControlsDay from '@/components/planning/controlsDay';
import { cn } from '@/lib/utils';

type Props = {
  data: EventsData;
  onDataChange: (events: EventsData) => void;
}

function RdvCalendarDay({data, onDataChange}: Props) {

  const {currentDay, setCurrentDay, changeDay, date} = useEventCalendarDay(); 
  const [showDialogue, setIShowDialogue] = useState<boolean>(false)

    const isSameDay = moment().isSame(currentDay, 'day');

    // Trier les événements par date
    const sortedEvents = data.sort((a, b) => moment(a.date_installation).valueOf() - moment(b.date_installation).valueOf());

    return (
        <div>
            <ControlsDay changeDay={changeDay} currentDay={currentDay} date={date}/>
            {/* <div className="">
                <div className="border p-4">
                    <div className="flex justify-between">
                    <h4 className={cn(moment().isSame(date, 'day') && 'text-red-500','mb-2')}>{date.format('dddd Do')}</h4>
                    <IoAddCircle 
                    className="text-gray-300 text-3xl cursor-pointer group-hover/item:block"
                    onClick={() => setIShowDialogue(true)}
                    />
                    </div>
                    <ul>
                        {sortedEvents
                            .filter(event => moment(event.date_installation).isSame(currentDay, 'day'))
                            .map((event, index) => (
                                <RdvCardWeek key={event.id} event={event} index={index}/>
                            ))}
                    </ul>
                </div>
            </div>
            {showDialogue && (
            <ModalRdv setIShowDialogue={setIShowDialogue} currentDate={date.format('YYYY MM DD')}/>
            )} */}
        </div>
    );
}

export default RdvCalendarDay