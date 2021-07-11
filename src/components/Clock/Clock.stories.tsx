import React from 'react';
import {Clock} from "./Clock";

export default {
    title: 'Clock Demo',
    component: Clock,
}

export const BaseAnalog = () => {
    return <Clock mode={'analog'}/>
}

export const BaseDigital = () => {
    return <Clock mode={'digital'}/>
}