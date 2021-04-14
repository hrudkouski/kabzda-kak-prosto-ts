import React, {useState} from 'react';
import starSolid from './star-solid.svg';
import starRegular from './star-regular.svg';
import '../../App.css'

type starPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRatings() {

    let [value, setValue] = useState(0);

    return (
        <div>
            <Star
                value={1}
                setValue={() => setValue(1)}
                selected={value > 0}
            />
            <Star
                value={2}
                setValue={() => setValue(2)}
                selected={value > 1}
            />
            <Star
                value={3}
                setValue={() => setValue(3)}
                selected={value > 2}
            />
            <Star
                value={4}
                setValue={() => setValue(4)}
                selected={value > 3}
            />
            <Star
                value={5}
                setValue={() => setValue(5)}
                selected={value > 4}
            />
        </div>
    );
}

function Star(props: starPropsType) {

    return <span onClick={() => props.setValue(props.value)}>
        {props.selected ? <img src={starSolid} alt="Solid"/>
            : <img src={starRegular} alt="Regular"/>}
    </span>
}