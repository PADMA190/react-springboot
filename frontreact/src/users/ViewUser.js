import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    collegeid: "",
    email: "",
    branch: "",
  });

  const { id } = useParams();
  const location = useLocation();
  const branch = new URLSearchParams(location.search).get('branch');

  const loadUser = useCallback(async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }, [id]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id: {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Name:</b> {user.name}</li>
                <li className="list-group-item"><b>College ID:</b> {user.collegeid}</li>
                <li className="list-group-item"><b>Email:</b> {user.email}</li>
                <li className="list-group-item"><b>Branch:</b> {user.branch}</li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={`/students/branch/${branch}`}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
