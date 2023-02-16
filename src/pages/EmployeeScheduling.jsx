import React, { useState } from "react";
import Header from "../components/Header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4 } from "uuid";
import { FiTrash2 } from "react-icons/fi";

import { users } from "../data/data";

const labelStyle =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
const inputStyle =
  "block py-2.5 px-0 w-full text-black-500 text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-500 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

const EmployeeScheduling = () => {
  const [listUsers, setListUsers] = useState(users);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [sex, setSex] = useState("");
  const [shift, setShift] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const user = {
      id,
      name: firstName,
      email: email,
      employeeId: id,
      statusPresent: false,
      lastName: lastName,
      department: department,
      sex: sex,
      shift: shift,
    };
    const listNewUsers = [...listUsers, user];
    setListUsers(listNewUsers);
    console.log(listNewUsers);
    setFirstName("");
    setLastName("");
    setDepartment("");
    setSex("");
    setShift("");
    setEmail("");
  };

  const handleDelete = (id) => {
    const listNewUsers = listUsers.filter((user) => user?.employeeId !== id);
    setListUsers(listNewUsers);
  };

  return (
    <div>
      <Header />
      <div className="mt-10 w-[600px] ">
        <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl">
          This web page provides employees with the ability to{" "}
          <mark className="px-2 text-white bg-gray-700 rounded dark:bg-gray-700">
            view and manage
          </mark>
          their work schedules and shifts.
        </h2>
      </div>

      <div className="flex justify-between mt-10">
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                required
                className={inputStyle}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label className={labelStyle}>First Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                placeholder=" "
                required
                className={inputStyle}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label className={labelStyle}>Last Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                placeholder=" "
                required
                className={inputStyle}
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
              <label className={labelStyle}>Department</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                placeholder=" "
                required
                className={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floating_first_name" className={labelStyle}>
                Email
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  placeholder=" "
                  required
                  className={inputStyle}
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                />
                <label htmlFor="floating_first_name" className={labelStyle}>
                  Sex
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  placeholder=" "
                  required
                  className={inputStyle}
                  value={shift}
                  onChange={(e) => setShift(e.target.value)}
                />
                <label htmlFor="floating_company" className={labelStyle}>
                  Shift
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-[50rem] mt-4">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Employee (ID)</TableCell>
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Department</TableCell>
                  <TableCell align="left">Sex</TableCell>
                  <TableCell align="left">Shift</TableCell>
                  <TableCell align="left">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listUsers.map((user) => (
                  <TableRow
                    key={user.employeeId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.employeeId}
                    </TableCell>
                    <TableCell align="left">{user.name}</TableCell>
                    <TableCell align="left">{user.lastName}</TableCell>
                    <TableCell align="left">{user.department}</TableCell>
                    <TableCell align="left">{user.sex}</TableCell>
                    <TableCell align="left">{user.shift}</TableCell>
                    <TableCell align="left">
                      <span
                        className="text-red-500 cursor-pointer "
                        onClick={() => handleDelete(user.employeeId)}
                      >
                        <FiTrash2 />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default EmployeeScheduling;
