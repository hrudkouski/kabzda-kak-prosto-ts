import React from "react";
import s from "./Clock.module.css";
import {ClocksViewPropsType} from "./Clock";

const getTwoIntegerStrings = (num: number) => num < 10 ? `0${num}` : num;

export const DigitalClockView: React.FC<ClocksViewPropsType> = ({date}) => {
    return <>
        <div className={s.wrapper}>
            <span>{getTwoIntegerStrings(date.getHours())}</span>
            :
            <span>{getTwoIntegerStrings(date.getMinutes())}</span>
            :
            <span>{getTwoIntegerStrings(date.getSeconds())}</span>
        </div>

        <div className={s.wrapper2}>
            {date.toLocaleTimeString('ru-RU')}
        </div>

        <div className={s.wrapper3}>
            {date.getHours().toString().padStart(2, '0')}
            :
            {date.getMinutes().toString().padStart(2, '0')}
            :
            {date.getSeconds().toString().padStart(2, '0')}
        </div>
    </>
}