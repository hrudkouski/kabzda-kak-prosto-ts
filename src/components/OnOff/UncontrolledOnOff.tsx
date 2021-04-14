import React, {useState} from 'react';

export const UncontrolledOnOff = () => {

    let [on, setOn] = useState(true);

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
        borderRadius: '15px',
    };
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red',
        borderRadius: '15px',
        marginLeft: '5px'
    };
    const indicatorStyle = {
        width: '15px',
        height: '27px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
        marginLeft: '5px'
    };

    return (
        <div>
            <div onClick={() => setOn(true)} style={onStyle}>On</div>
            <div onClick={() => setOn(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}>(!)</div>
        </div>
    )
}