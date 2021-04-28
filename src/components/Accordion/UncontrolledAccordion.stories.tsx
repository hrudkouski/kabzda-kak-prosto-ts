import React from 'react';
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'Uncontrolled Accordion',
    component: UncontrolledAccordion
}

export const ModeChanging = () => {
    return <UncontrolledAccordion
        titleValue={'Users'}
    />
}