import React from 'react'
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';




const Add = ({person}) => {
  const [employee, setEmployee] = useState({
    empID: person.empID,
    empName: person.empName,
    department: person.department,
    location: person.location
  })

  let fetchValue = (e) => {
    // console.log(e)
    setEmployee({ ...employee, [e.target.name]: e.target.value })//... spread operator, employee object inu varunna changes append cheyum 
  }

  let saveData = (e) => {
    // alert('Data submitted')
    console.log(employee)
  }
  return (

    <>
      <h2>Employee Details</h2>
      <TextField id="standard-basic" label="EmployeeId" name="EmployeeId" variant="standard" value={employee.empID} onChange={fetchValue} /><br />
      <TextField id="standard-basic" label="Name" name="Name" variant="standard" value={employee.empName} onChange={fetchValue} /><br />
      <TextField id="standard-basic" label="Designation" name="Designation" variant="standard" value={employee.department} onChange={fetchValue} /> <br />
      <TextField id="standard-basic" label="Location" name="Location" variant="standard" value={employee.location} onChange={fetchValue} />
      <br />

      <button variant="submit-button" onClick={saveData}>Submit</button>
    </>
  )
}

export default Add
