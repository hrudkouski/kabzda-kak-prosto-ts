import React from 'react';

type propsRatingsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function Ratings(props: propsRatingsType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
}

type starPropsType = {
    selected: boolean
}

function Star(props: starPropsType) {
    return props.selected ? <span><b>&#9733; </b></span> : <span>&#9734; </span>;
}