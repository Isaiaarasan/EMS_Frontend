import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeTaskActions from "./EmployeeTaskAction";
const GetEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const isAdmin =
    roles.includes("admin") || roles.includes("ADMIN") || roles.includes("both");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("token");
        const rolesFromStorage = JSON.parse(localStorage.getItem("roles") || "[]");
        setRoles(rolesFromStorage);

        const response = await axios.get("http://localhost:10000/employee", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees", error);
        alert("Could not fetch employee list.");
      }
    };

    fetchEmployees();
  }, []);

  const handleEdit = async (empId) => {
    const name = prompt("Enter updated name:");
    if (!name) return;

    const email = prompt("Enter updated email:");
    if (!email) return;

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:10000/employee/${empId}`,
        { name, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEmployees((prev) =>
        prev.map((emp) =>
          emp.empId === empId ? { ...emp, name, email } : emp
        )
      );

      alert("Employee updated.");
    } catch (error) {
      console.error("Update error", error);
      alert("Failed to update employee.");
    }
  };

  const handleDelete = async (empId) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:10000/employee/${empId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEmployees(employees.filter((emp) => emp.empId !== empId));
      alert("Employee deleted.");
    } catch (error) {
      console.error("Delete error", error);
      alert("Failed to delete employee.");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(90deg, #74c0fc, #b197fc)",
        padding: "30px",
      }}
    >
      <div className="bg-white p-4 rounded shadow w-75">
        <h2 className="mb-4 text-center text-primary">Employee List</h2>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan={isAdmin ? 3 : 2} className="text-center">
                  No employees found.
                </td>
              </tr>
            ) : (
              employees.map((employee) => (
                <tr key={employee.empId}>
                  <td>{employee.empId}</td>
                  <td
                    style={{ color: "#0d6efd", cursor: "pointer" }}
                    onClick={() => setSelectedEmployee(employee)}
                  >
                    {employee.name}
                  </td>
                  {isAdmin && (
                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => handleEdit(employee.empId)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(employee.empId)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal to show Add/List Tasks */}
      {selectedEmployee && (
        <EmployeeTaskActions
          selectedEmployee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default GetEmployee;