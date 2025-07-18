import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddTask = () => {
  const { empId } = useParams();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!localStorage.getItem("isLoggedIn")) {
        alert("Please login to add tasks");
        navigate("/login");
        return;
      }

      await axios.post(
        `http://localhost:10000/task/id/${empId}`,
        { title }
      );

      alert("Task added successfully!");
      setTitle("");
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(90deg, #74c0fc, #b197fc)",
        padding: "30px",
      }}
    >
      <h2 className="mb-4">➕ Add Task for Employee ID: {empId}</h2>
      <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task Title:
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
            style={{
              background: "linear-gradient(90deg, #c2bbbeff, #be81b9ff)",
              padding: "18px",
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;