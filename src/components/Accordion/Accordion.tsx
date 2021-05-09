import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onItemClick: (value: any) => void
}

export type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onItemClick: (value: any) => void
}

export type ItemType = {
    title: string
    value: any
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle
            onChange={props.onChange}
            title={props.titleValue}
        />
        {!props.collapsed && <AccordionBody onItemClick={props.onItemClick} items={props.items}/>}
    </div>
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <ul>
            {props.items.map((el, index) => (
                <li
                    onClick={() => {
                        props.onItemClick(el.value)
                    }}
                    key={index}>
                    {el.title}
                </li>
            ))}
        </ul>
    )
}

export default Accordion;