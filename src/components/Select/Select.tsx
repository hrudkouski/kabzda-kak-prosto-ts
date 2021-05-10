import React, {useEffect, useState, KeyboardEvent} from "react";
import s from './Select.module.css'

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, sethHoveredElementValue] = useState(props.value)

    useEffect(() => {
        sethHoveredElementValue(props.value);
    }, [props.value]);

    const selectedItem = props.items.find(el => el.value === props.value);
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue);

    const toggleItems = () => setActive(!active);
    const onItemClicked = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretenderElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretenderElement) {
                        props.onChange(pretenderElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    };

    return (
        <>
            <select>
                <option value=''>Minsk</option>
                <option value=''>Kiev</option>
                <option value=''>Moscow</option>
            </select>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span
                    className={s.main}
                    onClick={toggleItems}
                >
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el => {

                            const onMouseHovered = () => sethHoveredElementValue(el.value)
                            const onItemClickHandler = () => onItemClicked(el.value)
                            const itemClass = `${s.item} ${hoveredItem === el ? s.selected : ''}`

                            return (
                                <div
                                    onMouseEnter={onMouseHovered}
                                    className={itemClass}
                                    onClick={onItemClickHandler}
                                    key={el.value}>
                                    {el.title}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}
