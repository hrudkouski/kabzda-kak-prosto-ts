import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'Input'
}

export const UncontrolledInput = () => <input/>

export const ControlledInputWithFixedValues = () => {
    return <input value={'It-Incubator'}/>
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actionValue = e.currentTarget.value
        setValue(actionValue);
    }
    return <>
        <input value={value} onChange={onChange}/> - {value}
    </>
}

// export const GetValueOfUncontrolledInputByButtonPressNativeJs = () => {
//     const [value, setValue] = useState('')
//     return <>
//         <input id={'inputID'}/>
//         <button onClick={() => {
//             const el = document.getElementById('inputID') as HTMLInputElement;
//             setValue(el.value);
//         }}>save
//         </button>
//         - actual value: {value}
//     </>
// }

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    };
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save
        </button>
        - actual value: {value}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value);

    return <input
        onChange={onChange}
        value={parentValue}
    />
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    }

    return <input
        type='checkbox'
        onChange={onChange}
        checked={parentValue}
    />
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}