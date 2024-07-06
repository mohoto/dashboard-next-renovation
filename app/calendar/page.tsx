import CalendarComponent from "@/components/planning/calendar";
import { supabaseClient } from "@/utils/supabase/client";
import { EventsData } from "@/types/EventCalendarTypes";

/* const evenements: EventsData = [
    {
        id: '0',
        nom: 'Event 1',
        code_postal: '92260',
        date_installation: new Date('July 4, 2024 19:00:00'),
    },
    {
        id: '1',
        nom: 'Event 1',
        code_postal: '92260',
        date_installation:: new Date('July 4, 2024 19:00:00'),
    },
    {
        id: '2',
        nom: 'Event 1',
        code_postal: '92260',
        date_installation:: new Date('July 4, 2024 19:00:00'),
    },
    {
        id: '3',
        nom: 'Event 1',
        code_postal: '92260',
        date_installation:: new Date('July 4, 2024 19:00:00'),
    },
    {
        id: '4',
        nom: 'Event 1',
        code_postal: '92260',
        date_installation: new Date('July 4, 2024 19:00:00'),
    },
] */

const Calendar = async () => {

    const {data, error} = await supabaseClient
    .from('planning')
    .select()

    return (
        <CalendarComponent data={data}/>
    )
}

export default Calendar;


