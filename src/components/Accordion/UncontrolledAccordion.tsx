import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    titleValue: string
    setAccToDifferentState: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitle
            setAccToDifferentState={() => {
                dispatch({type: 'TOGGLE_COLLAPSED'})
            }}
            titleValue={props.titleValue}
        />
        {!state.collapsed && <AccordionBody/>}
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