import {useState} from 'react'
import { Event } from '@/types/EventCalendarTypes';
import {cn} from '@/lib/utils';
import moment from 'moment';

type Props = {
    event: Event;
    index: number;
}

function EventCardMonth({event, index}: Props) {

  const [showDialogue, setIShowDialogue] = useState(false)

  return (
    <div className={cn(index === 1 ? "border-green-800" : index === 2 ? "border-blue-800" : index === 3 ? "border-yellow-800" : "border-red-800", "my-2 p-1 bg-white flex justify-between text-xs border-l-4")}>
        <p>{moment(event.date).format("HH:mm")}</p>
        <p>{event.codePostal}</p>
    </div>
  )
}

export default EventCardMonth