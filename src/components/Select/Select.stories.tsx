import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import {Select, SelectPropsType} from "./Select";

export default {
    title: 'Select',
    component: Select,
}

const callback = action('select value changed');

const Template: Story<SelectPropsType> = (args) => <Select {...args} />;

export const SelectTrue = Template.bind({});

SelectTrue.args = {
    value: '1',
    items: [
        {title: 'Minsk', value: '1'},
        {title: 'Kiev', value: '2'},
        {title: 'Moscow', value: '3'},
    ],
    /**
     * Callback that is called when any item clicked
     */
    onChange: callback,
};

export const WithValue = () => {

    const [value, setValue] = useState('1')

    return <Select
        value={value}
        onChange={setValue}
        items={[
            {title: 'Minsk', value: '1'},
            {title: 'Kiev', value: '2'},
            {title: 'Moscow', value: '3'},
        ]}
    />
}

export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return <Select
        value={value}
        onChange={setValue}
        items={[
            {title: 'Minsk', value: '1'},
            {title: 'Kiev', value: '2'},
            {title: 'Moscow', value: '3'},
        ]}
    />
}

