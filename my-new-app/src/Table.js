import React from 'react'
import {Row} from './Row'
import { useState } from 'react'

const Users = [
    {firstName: 'John', lastName: 'Smith', email: 'john@example.com'},
    {firstName: 'Hendrix', lastName: 'Powers', email: 'HPowers@example.com'},
    {firstName: 'Sloane', lastName: 'Ventura', email: 'SoanVen@example.com'},
    {firstName: 'Pippa', lastName: 'Powers', email: 'Ppowers@example.com'},
    {firstName: 'Kathrine', lastName: 'Levine', email: 'Klevinn@example.com'}
  ]

  const Table = (props)=>{
    const {firstName, lastName, email} = props
    return(<tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        </tr>)
  }

  const Row = (props)=>{
    const {data}=props
    return(
        <table>
            <tbody>{data.map(row =>{
               <Row firstName={row.firstName}
               lastName={row.lastName}
               email={row.email}/>
            })}</tbody>
        </table>
    )

  }

export default function Table() {
    const [user, setUsers] = useState(Users);
  return (
    <div>

    </div>
  )
}
