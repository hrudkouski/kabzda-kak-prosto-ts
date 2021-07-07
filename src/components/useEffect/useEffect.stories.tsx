import React, {useEffect, useState} from 'react'; //1

export default {
    title: 'useEffect Demo'
}

export const SimpleExample1 = () => {

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log('SimpleExample1');

    // useEffect(() => {
    //     console.log('useEffect')
    //
    //     document.title = counter.toString();
    //
    //     // api.getUsers().then()
    //     // setInterval
    //     // indexDB
    //     // document.getElementByID
    //     // document.title = 'User'
    // })
    useEffect(() => {
        console.log('every render')
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('first render')
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log('change fake render')
        document.title = counter.toString();
    }, [fake])

    // если не передали зависимость, юзэффект вызывается каждый раз при перерендере страницы
    // а уже если передали зависимость, тогда уже будет срабатывать только первый раз, а далее при изменении зависимости

    return <>
        Hello, {counter}, {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}
