import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Empdetails from "./components/Empdetails";
import Addemp from "./components/Addemp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Employee" element={<Empdetails />} />
        <Route path="/Addemp" element={<Addemp />} />
      </Routes>
    </Router>
  );
}

export default App;