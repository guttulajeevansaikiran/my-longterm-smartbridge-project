import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      alert(res.data);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">Login</button>

      </form>
    </div>
  );
}

export default Login;
