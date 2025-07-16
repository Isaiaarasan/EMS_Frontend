import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex align-items-center">
        <h3 className="text-white m-0">EMS</h3>
        <div className="navbar-nav ms-auto">
          <Link to="/Employee" className="nav-link">Employee</Link>
          <Link to="/Addemp" className="nav-link">Add</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;