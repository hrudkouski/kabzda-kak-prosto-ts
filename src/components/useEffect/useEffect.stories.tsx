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
        console.log('change counter render')
        document.title = counter.toString();
    }, [counter])

    // если не передали зависимость, юзэффект вызывается каждый раз при перерендере страницы
    // а уже если передали зависимость, тогда уже будет срабатывать только первый раз, а далее при изменении зависимости

    return <>
        Hello, {counter}, {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log('SetTimeoutExample')

    useEffect( () => {

        setTimeout(() => {
            console.log('SetTimeout')
            document.title = counter.toString();
        }, 1000)

    }, [counter])

    return <>
        Hello, counter - {counter}, fake - {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log('SetIntervalExample')

    useEffect( () => {

        setInterval(() => {
            console.log('SetInterval - TIK - ' + counter)
            setCounter((state) => state + 1 )
        }, 1000)

    }, [])

    return <>
        Hello, counter - {counter}, fake - {fake}
    </>
}

export const Timer = () => {
    const [counter, setCounter] = useState(1);

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    useEffect( () => {
        setInterval(() => {
            console.log('SetInterval - TIK - ' + counter)
            setCounter((state) => state + 1 )
        }, 1000)
    }, [])

    return <>
        {`My watch - ${hours}:${minutes}:${seconds}`}
    </>
}