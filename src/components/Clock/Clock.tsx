import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'analog' | 'digital'
}

export type ClocksViewPropsType = {
    date: Date
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <>
            {props.mode === 'digital'
                ? <DigitalClockView date={date}/>
                : <AnalogClockView date={date}/>}
        </>
    )
}


