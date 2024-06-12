import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Manage() {
  const [users, setUsers] = useState([]);
  const { branch } = useParams();

  const loadUsers = useCallback(async () => {
    try {
      const result = await axios.get(`http://localhost:8080/users/branch/${branch}`);
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users by branch:", error);
    }
  }, [branch]);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers(); // Refresh list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div className="container">
      <div className="py-4">
        <h2>Students in {branch} Department</h2>
        <h4>Count: {users.length}</h4>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">CollegeId</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.collegeid}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}?branch=${branch}`}>View</Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/edituser/${branch}/${user.id}`}>Edit</Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Manage;
