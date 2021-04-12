import React, {useState} from 'react';

export function UncontrolledRatings() {

    let [value, setValue] = useState(0);

    // const buttonStyle = {
    //     backgroundColor: value ? 'green' : 'white',
    // }

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => setValue(1)}>1</button>
            <Star selected={value > 1}/>
            <button onClick={() => setValue(2)}>2</button>
            <Star selected={value > 2}/>
            <button onClick={() => setValue(3)}>3</button>
            <Star selected={value > 3}/>
            <button onClick={() => setValue(4)}>4</button>
            <Star selected={value > 4}/>
            <button onClick={() => setValue(5)}>5</button>
        </div>
    );
}

type starPropsType = {
    selected: boolean
}

function Star(props: starPropsType) {
    return props.selected ? <span><b>&#9733; </b></span> : <span>&#9734; </span>;
}