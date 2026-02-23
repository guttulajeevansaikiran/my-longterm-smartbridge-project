import React, { useEffect, useState } from "react";
import axios from "axios";

function Properties() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/property/all")
      .then(res => {
        setProperties(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const bookProperty = async (property) => {
    try {
      await axios.post("http://localhost:5000/api/booking/book", {
        user: "Teju",
        property: property.title,
        date: new Date()
      });
      alert("Property booked successfully");
    } catch {
      alert("Booking failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Available Properties</h2>

      {properties.map((p, index) => (
        <div key={index} className="card p-3 mt-3">
          {p.image && (
            <img
              src={p.image}
              alt="house"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          )}

          <h4 className="mt-2">{p.title}</h4>
          <p>{p.location}</p>
          <p>Rent: {p.rent}</p>

          <button
            className="btn btn-success"
            onClick={() => bookProperty(p)}
          >
            Book Property
          </button>
        </div>
      ))}

    </div>
  );
}

export default Properties;

