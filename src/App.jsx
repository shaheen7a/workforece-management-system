import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import EmployeeScheduling from './pages/EmployeeScheduling'
import AttendanceTracking from './pages/AttendanceTracking'
import TaskManagement from './pages/TaskManagement'
import ReportingAbilities from './pages/ReportingAbilities'

import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scheduling" element={<EmployeeScheduling />} />
        <Route path="/attendance" element={<AttendanceTracking />} />
        <Route path="/tasks" element={<TaskManagement />} />
        <Route path="/reporting" element={<ReportingAbilities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
