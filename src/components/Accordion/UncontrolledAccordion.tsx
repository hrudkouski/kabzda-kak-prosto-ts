import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    titleValue: string
    setAccToDifferentState: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle
            setAccToDifferentState={() => setCollapsed(!collapsed)}
            titleValue={props.titleValue}
        />
        {!collapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={() => props.setAccToDifferentState()}>
            {props.titleValue}
        </h3>
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