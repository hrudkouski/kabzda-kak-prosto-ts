import React, {useState} from 'react';

export const OnOff = () => {

    let [on, setOn] = useState(true);

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        marginLeft: '500px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
        borderRadius: '15px',
    };
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        marginLeft: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red',
        borderRadius: '15px',
    };
    const indicatorStyle = {
        width: '10px',
        height: '20px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    };

    return (
        <div>
            <div onClick={() => setOn(true)} style={onStyle}>On</div>
            <div onClick={() => setOn(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}>()</div>
        </div>
    )
}