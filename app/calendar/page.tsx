"use client"
import {useState} from 'react';
import EventCalendarMonth from '@/components/calendar/eventCalendarMonth';
import EventCalendarWeek from '@/components/calendar/eventCalendarWeek';
import { EventsData } from '@/types/EventCalendarTypes';
import { cn } from '@/lib/utils';
import { truncate } from 'fs';

const data: EventsData = [
    {
        id: '0',
        title: 'Event 1',
        codePostal: '92260',
        description: 'Description 1',
        populateContente: <>This will show in a popup later</>,
        date: new Date('July 4, 2024 19:00:00'),
    },
    {
        id: '1',
        title: 'Event 2',
        codePostal: '92430',
        description: 'Description 2',
        populateContente: <>This will show in a popup later</>,
        date: new Date('July 4, 2024 17:00:00'),
    },
    {
        id: '2',
        title: 'Event 2',
        codePostal: '92430',
        description: 'Description 2',
        populateContente: <>This will show in a popup later</>,
        date: new Date('July 4, 2024 16:30:00'),
    },
    {
        id: '3',
        title: 'Event 2',
        codePostal: '92430',
        description: 'Description 2',
        populateContente: <>This will show in a popup later</>,
        date: new Date('July 4, 2024 18:30:00'),
    }
]

const Calendar = () => {

    const [weekCalendar, setWeekCalendar] = useState<boolean>(false);
    const [monthCalendar, setMonthCalendar] = useState<boolean>(true);

    return (
        <div>
            <div className="flex justify-center gap-x-2">
                <button 
                className={cn(!weekCalendar ? 'bg-white' : 'bg-gray-700 text-white','px-4 py-2 rounded-sm')}
                onClick={() => {
                    setWeekCalendar(true)
                    setMonthCalendar(false)
                }}
                >
                    Semaine
                </button>
                <button 
                className={cn(!monthCalendar ? 'bg-white' : 'bg-gray-700 text-white','px-4 py-2 rounded-sm')}
                onClick={() => {
                    setMonthCalendar(true)
                    setWeekCalendar(false)
                }}
                >
                    Mois
                </button>
            </div>
            {weekCalendar && (
                <EventCalendarWeek data={data} 
                onDataChange={(events) => console.log(events)}/>
            )}
            {monthCalendar && (
                <EventCalendarMonth data={data} 
                onDataChange={(events) => console.log(events)}/>
            )}
        </div>
    );
}

export default Calendar;