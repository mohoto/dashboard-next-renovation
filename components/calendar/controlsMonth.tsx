"use client"
import React from 'react'
import moment from 'moment'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import 'moment/locale/fr';
moment.locale('fr');

type Props = {
    changeMonth: (action: 'add' | 'subtr') => void;
    date: moment.Moment;
}

function ControlsMonth({changeMonth, date}: Props) {
  return (
    <div className="flex justify-between items-center w-full my-4">
      <button  
      className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
      onClick={() => changeMonth('subtr')}
      >
        Mois précédent
      </button>
      <div className="font-bold text-lg">{date.format('MMMM YYYY')}</div>
      <button  
      className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
      onClick={() => changeMonth('add')}
      >
        Mois suivant
      </button>
    </div>
  )
}

export default ControlsMonth