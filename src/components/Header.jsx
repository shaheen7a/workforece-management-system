import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ComponentsStyle.css";
import { user } from "../data/data";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static" className="!bg-gray-900">
        <Container className="bg-gray-900">
          <Toolbar disableGutters className="bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                WORKFORCE MANAGEMENT
              </Typography>
            </div>

            <div className="flex items-center">
              {user ? (
                <div className="">
                  <Box sx={{ "& button": { m: 1 } }}>
                    <Button variant="outlined" size="small">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button variant="outlined" size="small">
                      <Link to="/register">Register</Link>
                    </Button>
                  </Box>
                </div>
              ) : (
                <div>
                  <h1>{user.email}</h1>
                </div>
              )}
            </div>
          </Toolbar>
          <Toolbar className="bg-gray-700 flex items-center">
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
              className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium"
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/scheduling" style={{ textDecoration: "none" }}>
                    <li className="text-gray-900 dark:text-white hover:underline">
                      Employee Scheduling
                    </li>
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/tasks" style={{ textDecoration: "none" }}>
                    <li className="text-gray-900 dark:text-white hover:underline">
                      Task Management
                    </li>
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/attendance" style={{ textDecoration: "none" }}>
                    <li className="text-gray-900 dark:text-white hover:underline">
                      Attendance Tracking
                    </li>
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/reporting" style={{ textDecoration: "none" }}>
                    <li className="text-gray-900 dark:text-white hover:underline">
                      Reporting
                    </li>
                  </Link>
                </Typography>
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
