import React, { useEffect, useState } from "react";

function Display() {
  const [employees, setEmployees] = useState([]);

  const handleEditClick = (event, data) => {
    // Placeholder function for edit click
    console.log("Edit clicked for data:", data);
    // Add your edit logic here
  };

  const handleDeleteClick = (id) => {
    // Placeholder function for delete click
    console.log("Delete clicked for contact with ID:", id);
    // Add your delete logic here
  };

  useEffect(() => {
    fetch("http://localhost:8080/getEmployees")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setEmployees(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <table id="customers">
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>ID Number</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => (
            <tr key={data.id}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.IDNumber}</td>
              <td>{data.PhoneNumber}</td>
              <td>{data.Position}</td>
              <td>
                <button
                  className="edit"
                  type="button"
                  onClick={(event) => handleEditClick(event, data)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  type="button"
                  onClick={() => handleDeleteClick(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
