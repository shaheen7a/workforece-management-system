import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function createData(employeeID, firstName, lastname, dept, sex, shift) {
  return { employeeID, firstName, lastname, dept, sex, shift };
}

const rows = [
  createData("01", 'Emp', 'Emp', "Web Frontend", "Male", "9 - 5"),
  createData("02", 'Emp', 'Emp', "Web Backend", "Male", "9 - 5"),
  createData("03", 'Emp', 'Emp', "Data Analytics", "Female", "Remote"),
  createData("04", 'Emp', 'Emp', "Marketing", "Male", "Remote"),
  createData("05", 'Emp', 'Emp', "Mobile Development", "Female", "9 - 5"),
];

const EmployeeScheduling = () => {

  return (
    <div>
      <Header />
      <div className="w-[50rem] mt-4">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='left'>Employee (ID)</TableCell>
                <TableCell align='left'>First Name</TableCell>
                <TableCell align='left'>Last Name</TableCell>
                <TableCell align='left'>Department</TableCell>
                <TableCell align='left'>Sex</TableCell>
                <TableCell align='left'>Shift</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.employeeID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.employeeID}
                  </TableCell>
                  <TableCell align='left'>{row.firstName}</TableCell>
                  <TableCell align='left'>{row.lastname}</TableCell>
                  <TableCell align='left'>{row.dept}</TableCell>
                  <TableCell align='left'>{row.sex}</TableCell>
                  <TableCell align='left'>{row.shift}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='mt-10'>
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input class="block w-full bg-gray-200 text-gray-700 border rounded mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Aous" />
              {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Shaheen" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Department
              </label>
              <input class="block w-full bg-gray-200 text-gray-700 border rounded mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Frontend" />
              {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Shift
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="9 to 5" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Sex
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <button class="shadow bg-[#00BFA6] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeScheduling