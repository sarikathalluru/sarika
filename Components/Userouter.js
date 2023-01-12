
import React from 'react';
import{ useEffect, useState } from 'react';


const Userouter =() => {
    const [users, setusers] = useState([]);
    const [send, setsend] = useState([false]);

    useEffect(() =>{
        send &&
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => setusers(data))
        .then((data) => setsend(false));

    },[send]);
  return (
    <React.Fragment>
        <button onClick={() =>setsend(true)}></button>
        <div>{users.map((user) => <li key={user.id}>{user.email}</li>)}</div>
    </React.Fragment>
    
  )
}

export default Userouter;