import React from 'react'

type Props = {
    index: number;
    daysGridLength: number;
}

function ExtraDays({index, daysGridLength}: Props) {

    const getWeekDays = () => {
        const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
        return days;
    }

    const weekdays = getWeekDays();

  return (
    <div className="h-8 text-center">
        {index < 7 && (
            <p>{weekdays[index]}</p>
        )}
    </div>
  )
}

export default ExtraDays