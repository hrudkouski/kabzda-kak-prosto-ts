import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode changed event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode2 = Template.bind({});

MenuCollapsedMode2.args = {
    titleValue: 'Menu',
    collapsed: true,
    /**
     * Callback that is called when any item clicked
     */
    onChange: callback,
};

// export const MenuCollapsedMode = () => <Accordion
//     titleValue={'Menu'}
//     collapsed={true}
//     onChange={callback}
// />
// export const UsersUnCollapsedMode = () => <Accordion
//     titleValue={'Users'}
//     collapsed={false}
//     onChange={callback}
// />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        collapsed={value}
        titleValue={'Users'}
        onChange={() => setValue(!value)}
    />
}