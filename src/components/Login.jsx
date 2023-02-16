import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // login functon
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <div>
      <div className="logo p-6 ">
        Workforce Management
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col my-12 items-center w-[500px] "
      >
        <h1 className=" text-5xl my-6 text-gray-600">Login</h1>

        <input
          type="text"
          placeholder="you@example.com"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary">Login</button>
        <p className=" my-4 text-xl text-gray-500">
          Dont't have an account yet?{" "}
          <Link to={"/register"} className=" text-black underline ">
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
