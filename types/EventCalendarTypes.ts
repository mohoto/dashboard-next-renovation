import { Moment } from 'moment';
import { ReactNode } from 'react';

export type DaysGrid= {
    no: number;
    date: Moment
}
export type Event = {
    id?: string;
    title: string;
    date: Date | Moment;
    description: string;
    codePostal: string;
    populateContente: ReactNode | ReactNode[];
}

export type EventsData = Array<Event>

