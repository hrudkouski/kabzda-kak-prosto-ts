import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'Input'
}

export const UncontrolledInput = () => <input/>

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

export const ControlledInputWithFixedValues = () => {
    return <input value={'It-Incubator'}/>
}