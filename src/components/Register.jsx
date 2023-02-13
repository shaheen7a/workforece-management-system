import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // login functon
    setEmail("");
    setPassword("");
    setName("");
    navigate("/login");
  };

  return (
    <div>
      <div className="logo text-white bg-primary p-6 ">
        Workforce Management
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col my-12 items-center w-[500px] "
      >
        <h1 className=" text-5xl my-6 text-gray-600">Register</h1>
        <input
          type="text"
          placeholder="john Doe"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="you@exampl.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary">Register</button>
        <p className=" my-4 text-xl text-gray-500">
          Already a member?{" "}
          <Link to={"/login"} className=" text-black underline ">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
