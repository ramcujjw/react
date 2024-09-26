import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const rows = [
    { id: 1, name: 'John Doe', department: 'Engineering', location: 'New York' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', location: 'London' },
    { id: 3, name: 'Michael Brown', department: 'HR', location: 'Berlin' },
    { id: 4, name: 'Emily White', department: 'Finance', location: 'Paris' },
    { id: 5, name: 'Chris Green', department: 'Sales', location: 'Tokyo' },
  ];
export const Home = () => {
   
     
        return (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* <TableCell>Dessert (100g serving)</TableCell> */}
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Name&nbsp;(g)</TableCell>
                  <TableCell align="right">Dept&nbsp;(g)</TableCell>
                  <TableCell align="right">Location&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.dept}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
  )
}

export default Home
