import React from 'react'
import { Link } from 'react-router-dom';
import "./ComponentsStyle.css"
const Header = () => {

  return (
    <div className='header'>
      <Link to="/" style={{ textDecoration: 'none', color: "#fff" }}>
        <div className='logo'>Workforce Management</div>
      </Link>
      <div className='list'>
        <ul>
          <Link to="/scheduling" style={{ textDecoration: 'none' }}>
            <li className='listItem'>Employee Scheduling</li>
          </Link>
          <Link to="/tasks" style={{ textDecoration: 'none' }}>
            <li className='listItem'>Task Management</li>
          </Link>
          <Link to="/attendance" style={{ textDecoration: 'none' }}>
            <li className='listItem'>Attendance Tracking</li>
          </Link>
          <Link to="/reporting" style={{ textDecoration: 'none' }}>
            <li className='listItem'>Reporting</li>
          </Link>
        </ul>
      </div>

      <div className='btns'>
        <Link to="/login" style={{
          backgroundColor: "#fff",
          color: "#1E90FF",
          border: "1px solid #1E90FF",
          borderRadius: "5px",
          padding: "10px 20px",
          textDecoration: "none",
          marginLeft: "20px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}>
          Login
        </Link>
        <Link to="/register" style={{
          backgroundColor: "#fff",
          color: "#1E90FF",
          border: "1px solid #1E90FF",
          borderRadius: "5px",
          padding: "10px 20px",
          textDecoration: "none",
          marginLeft: "20px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}>
          Register
        </Link>
      </div>
    </div >
  )
}

export default Header