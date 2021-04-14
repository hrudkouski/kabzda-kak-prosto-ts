import React from "react";

export type AccordionCollapsedType = boolean;

export type AccordionPropsType = {
    collapsed: AccordionCollapsedType
    titleValue: string
    onClick: (collapsed: AccordionCollapsedType) => void
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle collapsed={!props.collapsed} onClick={props.onClick} titleValue={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    titleValue: string
    collapsed: AccordionCollapsedType
    onClick: (collapsed: AccordionCollapsedType) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick(props.collapsed)}>{props.titleValue}</h3>
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