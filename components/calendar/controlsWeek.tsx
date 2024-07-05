"use client"
import React from 'react'
import moment from 'moment'
import 'moment/locale/fr';
moment.locale('fr');

type Props = {
    changeWeek: (action: 'add' | 'subtr') => void;
    date: moment.Moment;
    currentWeek: moment.Moment;
}

function ControlsWeek({changeWeek, date, currentWeek}: Props) {
  return (
    <div className="flex justify-between items-center w-full my-4">
      <button  
      className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
      onClick={() => changeWeek('subtr')}
      >
        Semaine précédente
      </button>
      <div className="font-bold text-lg">{currentWeek.format('MMMM YYYY')}</div>
      <button  
      className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
      onClick={() => changeWeek('add')}
      >
        Semaine suivant
      </button>
    </div>
  )
}
export default ControlsWeek