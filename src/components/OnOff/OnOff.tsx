import React from 'react';

export type SwitchOnType = boolean;

type OnOffPropsType = {
    on: SwitchOnType
    onClick: (on: SwitchOnType) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'yellow' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'orange',
        marginLeft: '5px'
    };
    const indicatorStyle = {
        width: '15px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'yellow' : 'orange',
        marginLeft: '5px'
    };

    return (
        <div>
            <div onClick={() => props.onClick(!props.on)} style={onStyle}>On</div>
            <div onClick={() => props.onClick(!props.on)} style={offStyle}>Off</div>
            <div style={indicatorStyle}>(!)</div>
        </div>
    )
}