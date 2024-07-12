/* Video reference link :- https://youtu.be/MxIPQZ64x0I?si=7hLhG3YBddXdtSjK */

/*
useCallback is a React Hook that lets you cache a function definition between re-renders.

usage :-
Skipping re-rendering of components
Updating state from a memoized callback
Preventing an Effect from firing too often
Optimizing a custom Hook
*/

import React, { useCallback, useState } from 'react'
import Search from './Search';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}


const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
];


function Callback() {
    const [users, setUsers] = useState(allUsers);
         
    const handleSearch = useCallback(
        (text: string) => {
            console.log(users[0]);
            const filteredUsers = allUsers.filter(user => {
                user.includes(text)
            })
            setUsers(filteredUsers);
        }, [users]
    )


    return (
        <div>
            <div>

                <button onClick={() => setUsers(shuffleArray([...allUsers]))}>Shuffle</button>

                <Search onChange={handleSearch} />
            </div>
            <ul>
                {
                    users.map(user => (
                        <li key={user}>{user}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Callback;