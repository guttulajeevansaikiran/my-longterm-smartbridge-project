import React, { useState } from "react";
import axios from "axios";

function AddProperty() {

  const [form, setForm] = useState({
    title: "",
    location: "",
    rent: "",
    image: ""
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
      await axios.post("http://localhost:5000/api/property/add", form);
      alert("Property added successfully");
    } catch {
      alert("Error adding property");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Property</h2>

      <form onSubmit={handleSubmit}>

        <input className="form-control mb-3"
          name="title"
          placeholder="Property Title"
          onChange={handleChange}
        />

        <input className="form-control mb-3"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input className="form-control mb-3"
          name="rent"
          placeholder="Rent"
          onChange={handleChange}
        />

        <input className="form-control mb-3"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <button className="btn btn-primary">Add Property</button>

      </form>
    </div>
  );
}

export default AddProperty;
