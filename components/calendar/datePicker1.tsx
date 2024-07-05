"use client"
import {useState} from 'react'
import { Moment } from 'moment';
import Datepicker from "tailwind-datepicker-react"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

type Props = {
    currentDate: string;
    dateDaySelected: Date
    //currentDate: Date;
    setDateDaySelected: (date: Date) => void
}

function DatePicker1({currentDate, setDateDaySelected, dateDaySelected}: Props) {


    console.log("currentDate:", currentDate)
    /* console.log("new Date", new Date("2024-08-01")) */

    const [show, setShow] = useState<boolean>(false)
    const handleClose = (state: boolean) => {
		setShow(state)
	}

    const handleChange = (selectedDate: Date) => {
		console.log("selectedDate", selectedDate)
        setDateDaySelected(selectedDate)
	}

    const options = {
        title: "Date installation",
        autoHide: true,
        //todayBtn: false,
        todayBtnText: "Aujourd'hui",
        clearBtn: false,
        clearBtnText: "Annuler",
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "bg-gray-100",
            todayBtn: "bg-blue-500",
            clearBtn: "",
            icons: "bg-gray-100",
            text: "",
            disabledText: "bg-gray-100 text-white",
            input: "bg-blue-500 text-white",
            inputIcon: "text-white",
            selected: "bg-blue-500",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span className="bg-red"><MdArrowBackIos /></span>,
            next: () => <span><MdArrowForwardIos /></span>,
        },
        datepickerClassNames: "top-12",
        defaultDate: dateDaySelected,
        //defaultDate: new Date("2024-08-01"),
        //defaultDate: new Date(currentDate),
        language: "fr",
        disabledDates: [],
        weekDays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }

  return (
    <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
  )
}

export default DatePicker1