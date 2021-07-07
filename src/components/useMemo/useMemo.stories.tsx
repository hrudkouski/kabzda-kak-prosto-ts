import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input
            value={a}
            onChange={(e) => setA(+e.currentTarget.value)}
        />
        <input
            value={b}
            onChange={(e) => setB(Number(e.currentTarget.value))}
        />
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>{
        props.users.map((el, i) => <div key={i}>{el}</div>)
    }</div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        setUsers([
            ...users,
            'Svetlana ' + new Date().getTime()
        ])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>addUser</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
        const newArray = books.filter(el => el.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    const addUser = () => {
        setBooks([
            ...books,
            'Angular ' + new Date().getTime()
        ])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>addBook</button>
        {counter}
        <Book books={newArray} />
    </>
}

export const BooksSecret = (props: { books: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>{
        props.books.map((el, i) => <div key={i}>{el}</div>)
    }</div>
}

const Book = React.memo(BooksSecret);