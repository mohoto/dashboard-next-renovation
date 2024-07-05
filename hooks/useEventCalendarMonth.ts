"use client"
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
import { DaysGrid } from '@/types/EventCalendarTypes';


export default function useEventCalendarMonth() {
    //const timestamp = new Date('August 2, 2024 03:24:00');
    //const [date, setDate] = useState(moment(timestamp));
    const [date, setDate] = useState(moment());
    const [daysGrid, setDaysGrid] = useState<Array<DaysGrid>>([]);

    useEffect(() => {
        getMonthDaysGrid();
    }, [date])
    const getMonthDaysGrid = () => {
        let totalNextMonthStartDays : number;
        //const firstDayOfMonth = date.clone().startOf('month').startOf('week');
        //const lastDayOfMonth = date.clone().endOf('month').endOf('week');
        const firstDayOfMonth = date.clone().startOf('month'); // date du premier jour du mois
        const lastDayOfMonth = date.clone().endOf('month'); // date du dernier jour du mois
        const totalLastMonthFinalDays = firstDayOfMonth.days() -1 < 0 ? 6 : firstDayOfMonth.days() -1; 
        //firstDayOfMonth.days() : Jour de la selaine du premier jour du mois
        const lastDayOfMonthDays = lastDayOfMonth.days();
        //flastDayOfMonth.days(); : Jour de la selaine du dernier jour du mois
        if(lastDayOfMonthDays=== 1) totalNextMonthStartDays = 6;
        else if(lastDayOfMonthDays === 2) totalNextMonthStartDays = 5;
        else if(lastDayOfMonthDays === 3) totalNextMonthStartDays = 4;
        else if(lastDayOfMonthDays === 4) totalNextMonthStartDays = 3;
        else if(lastDayOfMonthDays === 5) totalNextMonthStartDays = 2;
        else if(lastDayOfMonthDays === 6) totalNextMonthStartDays = 1;
        else totalNextMonthStartDays = 0;

        const totalDays = date.daysInMonth() + totalLastMonthFinalDays + totalNextMonthStartDays;
        const monthList: Array<DaysGrid> = Array.from({length: totalDays})
        console.log("monthList:", monthList);
        let counter = 1;

        for(let i = totalLastMonthFinalDays; i < totalDays; i++) {
            if(i < totalDays - totalNextMonthStartDays) {
                monthList[i] = {
                    no: counter,
                    date: date.clone().startOf('month').add(counter - 1, 'days')
                }
                counter++;
            }
            setDaysGrid(monthList);

        }
        
       /*  console.log("firstDayOfMonth.days():", firstDayOfMonth.days());
        console.log("lastDayOfMonth.days();:", lastDayOfMonth.days());
        console.log("firstDayOfMonth:", firstDayOfMonth);
        console.log("lastDayOfMonth:", lastDayOfMonth);
        console.log("totalLastMonthFinalDays:", totalLastMonthFinalDays);
        console.log("lastDayOfMonthDays:", lastDayOfMonthDays);
        console.log("totalNextMonthStartDays:", totalNextMonthStartDays);
        console.log("date.daysInMonth():", date.daysInMonth());
        console.log("totalDays:", totalDays);
        console.log("monthList:", monthList);
        console.log("daysGrid:", daysGrid);
        console.log("date:", date); */

        //console.table({totalLastMonthFinalDays, lastDayOfMonthDays, totalNextMonthStartDays});

        //const day = firstDayOfMonth.clone().subtract(1, 'day');
        /* const monthGrid = [];
        while (day.isBefore(lastDayOfMonth, 'day')) {
            monthGrid.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, 'day').clone())
            );
        }
        return monthGrid;  */

    }
    const changeMonth = (action: 'add' | 'subtr') => {
        if(action === 'add') setDate(date.clone().add(1, 'month'));
        if(action === 'subtr') setDate(date.clone().subtract(1, 'month'));
    } 
    return { 
        date, daysGrid, changeMonth
     };

}