"use client"
import {useState} from 'react';
import { EventsData } from '@/types/EventCalendarTypes'
import moment from 'moment';
import useEventCalendarWeek from '@/hooks/useEventCalendarWeek';
import RdvCardWeek from '@/components/planning/rdvCardMonth';
import { IoAddCircle } from "react-icons/io5";
import ModalRdv from '@/components/planning/modalRdv';
import ControlsWeek from '@/components/planning/controlsWeek';
import { cn } from '@/lib/utils';

type Props = {
  data: EventsData;
  onDataChange: (events: EventsData) => void;
}

function RdvCalendarWeek({data, onDataChange}: Props) {

  const {currentWeek, setCurrentWeek, changeWeek, date} = useEventCalendarWeek(); 
  const [showDialogue, setIShowDialogue] = useState<boolean>(false)

    // Obtenir les jours de la semaine actuelle
    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        daysOfWeek.push(currentWeek.clone().add(i, 'days'));
    }

    const isSameDay = moment().isSame(date, 'day');

    // Trier les événements par date
    const sortedEvents = data.sort((a, b) => moment(a.date_installation).valueOf() - moment(b.date_installation).valueOf());

    return (
        <div>
            <ControlsWeek changeWeek={changeWeek} currentWeek={currentWeek} date={date}/>
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
                                .filter(event => moment(event.date_installation).isSame(day, 'day'))
                                .map((event, index) => (
                                  <RdvCardWeek key={event.id} event={event} index={index}/>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
            {showDialogue && (
            <ModalRdv setIShowDialogue={setIShowDialogue} currentDate={date.format('YYYY MM DD')}/>
            )}
        </div>
    );
}

export default RdvCalendarWeek