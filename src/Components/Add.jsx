import React from 'react'
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';


  

const Add = () => {
  const [employee, setEmployee ]= useState({
    EmployeeId:'',
    Name:'',
    Designation:'',
    Location:''
  })

const fetchValue=(e)=>{
    // console.log(e)
    setEmployee({...employee,[e.target.name]:e.target.value})//... spread operator, employee object inu varunna changes append cheyum 
}

const saveData=(e)=>{
  alert('Data submitted')
}
  return (
    
    <>
    <h2>Employee Details</h2>
    <TextField id="standard-basic" label="Employee Id" name="Employee Id" variant="standard" value={employee.EmployeeId} /><br />
    <TextField id="standard-basic" label="Name" name="Name" variant="standard" value={employee.Name} onChange={fetchValue}/><br />
    <TextField id="standard-basic" label="Designation" name="Designation" variant="standard" value ={employee.Designation} /><br />
    <TextField id="standard-basic" label="Location" name="Location" variant="standard"value= {employee.Location}/>
    <br />
    
    <button variant="submit-button" onClick={saveData}>Submit</button>
    </>
  )
}

export default Add
