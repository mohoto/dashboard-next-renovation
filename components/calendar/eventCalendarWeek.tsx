"use client"
import {useState} from 'react';
import Day from '@/components/calendar/day'
import ExtraDays from '@/components/calendar/extraDays'
import { EventsData } from '@/types/EventCalendarTypes'
import moment from 'moment';
import useEventCalendarWeek from '@/hooks/useEventCalendarWeek';
import EventCardWeek from '@/components/calendar/eventCardMonth';
import { IoAddCircle } from "react-icons/io5";
import ModalEvent from '@/components/calendar/modalEvent';
import ControlsWeek from '@/components/calendar/controlsWeek';
import { cn } from '@/lib/utils';

type Props = {
  data: EventsData;
  onDataChange: (events: EventsData) => void;
}

function EventCalendarWeek({data, onDataChange}: Props) {

  const {currentWeek, setCurrentWeek, changeWeek, date} = useEventCalendarWeek(); 
  const [showDialogue, setIShowDialogue] = useState<boolean>(false)

    // Obtenir les jours de la semaine actuelle
    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        daysOfWeek.push(currentWeek.clone().add(i, 'days'));
    }

    const isSameDay = moment().isSame(date, 'day');

    // Trier les événements par date
    const sortedEvents = data.sort((a, b) => moment(a.date).valueOf() - moment(b.date).valueOf());

    return (
        <div>
            <ControlsWeek changeWeek={changeWeek} currentWeek={currentWeek} setCurrentWeek={setCurrentWeek}/>
            <div className="lg:grid-cols-4 xl:grid-cols-7">
                {daysOfWeek.map(day => (
                    <div key={day.format('DD-MM-YYYY')} className="border p-4">
                      <div className="flex justify-between">
                        <h4 className={cn(moment().isSame(day, 'day') && 'text-red-500','mb-2')}>{day.format('dddd Do')}</h4>
                        <IoAddCircle 
                        className="text-gray-300 text-3xl cursor-pointer group-hover/item:block"
                        onClick={() => setIShowDialogue(true)}
                        />
                      </div>
                        <ul>
                            {sortedEvents
                                .filter(event => moment(event.date).isSame(day, 'day'))
                                .map((event, index) => (
                                  <EventCardWeek key={event.id} event={event} index={index}/>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
            {showDialogue && (
            <ModalEvent setIShowDialogue={setIShowDialogue} />
        )}
        </div>
    );
}

export default EventCalendarWeek