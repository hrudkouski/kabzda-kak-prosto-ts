import React, {useState} from 'react';

export default {
    title: 'React.memo Demo'
}

export const NewMessageCounterSecret = (props: { count: number }) => {
    console.log('NewMessageCounter RENDERING')
    return (
        <div>{props.count}</div>
    )
}

export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS RENDERING')
    return (
        <div>
            {
                props.users.map((el, i) => <div key={i}>{el}</div>)
            }
        </div>
    )
}

const Users = React.memo(UsersSecret);
const NewMessageCounter = React.memo(NewMessageCounterSecret);

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    console.log('Example1 RENDERING')
    const addUser = () => {
        setUsers([
            ...users,
            'Svetlana ' + new Date().getTime()
        ])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>addUser</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}

