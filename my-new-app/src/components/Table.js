import React from 'react'
import {StyledTable}from './StyledTable'
import {useState, useEffect} from 'react'


function Table() {
    // it make sense to put this in a seperate function or put it in the main app and use props later.
    const [users, setUsers] = useState([])

    const fetchUserData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])


  return (
    <div>
        {users.length > 0 && (
        <table className = "users"> 
          <tr>
    <th>NAME</th>
    <th>EMAIL</th>
    <th>PHONE</th>
  </tr>
          {users.map(user => (
            <td key={user.id}>{user.name}</td>
          ))}
           {users.map(user => (
            <td key={user.id}>{user.email}</td>
          ))}
           {users.map(user => (
            <td key={user.id}>{user.phone}</td>
          ))}
          <tr/>
        </table>

      )}


    </div>
  )
}

export default Table