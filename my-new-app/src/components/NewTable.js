import React from 'react'



 function NewTable(data, column) {
    
  return (
    <div>
       <thead>
        <tr>
            {column.map((item,index) => <TableHeadItem item={item}/>)}
            </tr>
       </thead>
       <tbody>
        <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        </tr>
        </tbody>
       
    </div>
  )
}

const TableHeadItem = ({item})=><th>{item.heading}</th>
       
export default NewTable;

 