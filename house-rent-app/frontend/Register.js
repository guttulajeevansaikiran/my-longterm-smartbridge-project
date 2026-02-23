import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {

  const [form, setForm] = useState({
    name: "",
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
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      alert(res.data);
    } catch (err) {
      alert("Error registering user");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            onChange={handleChange}
          />
        </div>

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

        <button className="btn btn-primary">Register</button>

      </form>

      <p className="mt-3">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
