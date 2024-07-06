import { Moment } from 'moment';
import { ReactNode } from 'react';

export type DaysGrid= {
    no: number;
    date: Moment
}
export interface Event {
    id: string;
    date_installation?: string;
    heure_installation: string;
    nom: string;
    prenom?: string;
    tel?: string;
    email?: string;
    adresse?: string;
    ville?: string;
    code_postal: string;
    statut_client?: string;
    type_habitation?: string;
    surface_habitable?: string;
    type_chauffage?: string;
    nombre_radiateur?: string;
    commentaires?: string;
    statut?: string;
    rappel_telephone?: string;
    technicien?: string;
    commercial?: string;
}

export type EventsData = Array<Event>

