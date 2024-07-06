"use client"
import {useState} from 'react';
import RdvCalendarMonth from '@/components/planning/rdvCalendarMonth';
import RdvCalendarWeek from '@/components/planning/rdvCalendarWeek';
import RdvCalendarDay from '@/components/planning/rdvCalendarDay';
import { cn } from '@/lib/utils';
import { EventsData } from '@/types/EventCalendarTypes';

type Props = {
    data: any
}

function CalendarComponent({data}: Props) {

    const [weekCalendar, setWeekCalendar] = useState<boolean>(false);
    const [monthCalendar, setMonthCalendar] = useState<boolean>(true);
    const [dayCalendar, setDayCalendar] = useState<boolean>(false);

    return (
        <div>
            <div className="flex justify-center gap-x-2">
                <button 
                className={cn(!weekCalendar ? 'bg-white' : 'bg-gray-700 text-white','px-4 py-2 rounded-sm')}
                onClick={() => {
                    setWeekCalendar(true)
                    setMonthCalendar(false)
                    setDayCalendar(false)
                }}
                >
                    Semaine
                </button>
                <button 
                className={cn(!monthCalendar ? 'bg-white' : 'bg-gray-700 text-white','px-4 py-2 rounded-sm')}
                onClick={() => {
                    setMonthCalendar(true)
                    setWeekCalendar(false)
                    setDayCalendar(false)
                }}
                >
                    Mois
                </button>
                <button 
                className={cn(!dayCalendar ? 'bg-white' : 'bg-gray-700 text-white','px-4 py-2 rounded-sm')}
                onClick={() => {
                    setDayCalendar(true)
                    setWeekCalendar(false)
                    setMonthCalendar(false)
                }}
                >
                    Jours
                </button>
            </div>
            {weekCalendar && (
                <RdvCalendarWeek data={data} 
                onDataChange={(events) => console.log(events)}/>
            )}
            {monthCalendar && (
                <RdvCalendarMonth data={data} 
                onDataChange={(events) => console.log(events)}/>
            )}
            {dayCalendar && (
                <RdvCalendarDay data={data} 
                onDataChange={(events) => console.log(events)}/>
            )}
        </div>
    );
}

export default CalendarComponent