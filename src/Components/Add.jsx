import React from 'react'
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Add = () => {
  return (
    
    <>
    <h2>Employee Details</h2>
    <TextField id="standard-basic" label="Employee Id" variant="standard" /><br />
    <TextField id="standard-basic" label="Name" variant="standard" /><br />
    <TextField id="standard-basic" label="Designation" variant="standard" /><br />
    <TextField id="standard-basic" label="Location" variant="standard" />
    </>
  )
}

export default Add
