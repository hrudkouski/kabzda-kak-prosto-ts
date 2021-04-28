import React from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff
}

const callback = action('on or off clicked');

export const OnMode = () => <UncontrolledOnOff
    onChange={callback}
    defaultOn={true}
/>;

export const OffMode = () => <UncontrolledOnOff
    defaultOn={false}
    onChange={callback}
/>;