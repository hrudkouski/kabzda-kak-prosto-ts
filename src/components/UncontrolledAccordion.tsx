import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    const toggleStyle = {
        backgroundColor: collapsed ? 'yellow' : 'green',
    }

    return <div>
        <AccordionTitle titleValue={props.titleValue}/>
        <button
            onDoubleClick={() => setCollapsed(true)}
            onClick={() => setCollapsed(false)}
            style={toggleStyle}
        >TOGGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>
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

export default UncontrolledAccordion;