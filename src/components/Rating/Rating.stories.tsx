import React, {useState} from 'react';
import {Ratings, RatingValueType} from "./Ratings";

export default {
    title: 'Rating',
    component: Ratings
}

export const EmptyRating = () => <Ratings value={0} onClick={x => x}/>;
export const Empty1 = () => <Ratings value={1} onClick={x => x}/>;
export const Empty2 = () => <Ratings value={2} onClick={x => x}/>;
export const Empty3 = () => <Ratings value={3} onClick={x => x}/>;
export const Empty4 = () => <Ratings value={4} onClick={x => x}/>;
export const Empty5 = () => <Ratings value={5} onClick={x => x}/>;

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(5);
    return <Ratings value={rating} onClick={setRating}/>
}