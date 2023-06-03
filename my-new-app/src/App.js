import './App.css';
import styled from 'styled-components'
import StyledButton from './components/Button'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  const [rows, setRows] = useState(Users);
  const Users = [
    {firstName: 'John', lastName: 'Smith', email: 'john@example.com'},
    {firstName: 'Hendrix', lastName: 'Powers', email: 'HPowers@example.com'},
    {firstName: 'Sloane', lastName: 'Ventura', email: 'SoanVen@example.com'},
    {firstName: 'Pippa', lastName: 'Powers', email: 'Ppowers@example.com'},
    {firstName: 'Kathrine', lastName: 'Levine', email: 'Klevinn@example.com'}
  ]

  const Row = (props)=>{
    const {firstName, lastName, email} = props
    return(<tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        </tr>)
  }

  const Table = (props)=>{
    const {data}=props
    return(<table>
    <tbody>{data.map(row =>
           <Row firstName={row.firstName}
           lastName={row.lastName}
           email={row.email}/>
        )}</tbody>
    </table>)
  }

  

  return (
    <div className= "App">
      <StyledButton>Heeeeey</StyledButton>
      <Table data={rows}/>
      


  
   </div>
  );
 
}

export default App;
