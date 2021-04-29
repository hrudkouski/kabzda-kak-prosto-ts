import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    // items: ItemType[]
    // onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle
            onChange={props.onChange}
            title={props.titleValue}
        />
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ (e) => props.onChange()}>{props.title}</h3>
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