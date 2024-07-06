"use client"
import React from 'react'
import moment from 'moment'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import 'moment/locale/fr';
moment.locale('fr');

type Props = {
    changeDay: (action: 'add' | 'subtr') => void;
    date: moment.Moment;
    currentDay: moment.Moment;
}

function ControlsMonth({changeDay, currentDay, date}: Props) {
  return (
    <div className="flex justify-between items-center w-full my-4">
      <button  
      className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
      onClick={() => changeDay('subtr')}
      >
        Jour précédent
      </button>
      <div className="font-bold text-lg">{currentDay.format('DD MMMM YYYY')}</div>
      <button  
      className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
      onClick={() => changeDay('add')}
      >
        Jour suivant
      </button>
    </div>
  )
}

export default ControlsMonth