import React from 'react';
import {UncontrolledRatings} from "./UncontrolledRatings";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRatings',
    component: UncontrolledRatings
}

const callback = action('rating changed inside components');

export const EmptyRating = () => <UncontrolledRatings
    defaultValue={0}
    onChange={callback}
/>;
export const Empty1 = () => <UncontrolledRatings
    defaultValue={1}
    onChange={callback}
/>;
export const Empty2 = () => <UncontrolledRatings
    defaultValue={2}
    onChange={callback}
/>;
export const Empty3 = () => <UncontrolledRatings
    defaultValue={3}
    onChange={callback}
/>;
export const Empty4 = () => <UncontrolledRatings
    defaultValue={4}
    onChange={callback}
/>;
export const Empty5 = () => <UncontrolledRatings
    defaultValue={5}
    onChange={callback}
/>;