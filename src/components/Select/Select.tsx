import React from "react";

export type SelectPropsType = {
    value: any
    onChange: () => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {
    return <div>
        <div>{}</div>
        {props.items.map(el => <div>{el.title}</div>)}
    </div>
}