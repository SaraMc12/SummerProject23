import './App.css';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import StyledButton from './components/Button'
import NewTable from './components/NewTable'
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  const [dataTable, setDataTable] = useState([])
  console.log(dataTable)
  // get request for api
  fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json(setDataTable.dataTable))
      .then(json => console.log(dataTable, json))

  return (
    <div className= "App">
      <StyledButton>Heeeeey</StyledButton> 
      <NewTable />
   </div>
  );
 
}

export default App;
