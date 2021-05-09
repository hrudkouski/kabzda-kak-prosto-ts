import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode changed event fired');
const onItemClick = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode2 = Template.bind({});

MenuCollapsedMode2.args = {
    titleValue: 'Menu',
    collapsed: true,
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Victor', value: 4}
    ],
    /**
     * Callback that is called when any item clicked
     */
    onChange: callback,
    onItemClick: onItemClick
};

export const MenuCollapsedMode = () => <Accordion
    items={[
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Victor', value: 4}
    ]}
    titleValue={'Menu'}
    collapsed={true}
    onChange={callback}
    onItemClick={onItemClick}
/>
export const UsersUnCollapsedMode = () => <Accordion
    items={[
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Victor', value: 4}
    ]}
    titleValue={'Users'}
    collapsed={false}
    onChange={callback}
    onItemClick={onItemClick}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        items={[
            {title: 'Dimych', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Artem', value: 3},
            {title: 'Victor', value: 4}
        ]}
        collapsed={value}
        titleValue={'Users'}
        onChange={() => setValue(!value)}
        onItemClick={(id) => `User with ID ${id} should be happy`}
    />
}