import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(false);

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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div
                onClick={onClicked}
                style={onStyle}>On
            </div>
            <div onClick={offClicked}
                 style={offStyle}>Off
            </div>
            <div style={indicatorStyle}>(!)</div>
        </div>
    )
}