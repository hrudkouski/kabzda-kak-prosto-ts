import React from "react";

type AccordionPropsType = {
    collapsed: boolean
    titleValue: string
}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return <div><AccordionTitle titleValue={props.titleValue}/> <AccordionBody/></div>
    } else {
        return <div><AccordionTitle titleValue={props.titleValue}/></div>
    }
}

type AccordionTitlePropsType = {
    titleValue: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.titleValue}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;