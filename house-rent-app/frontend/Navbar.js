import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link className="navbar-brand text-white" to="/">HouseRent</Link>

      <div>
        <Link className="text-white me-3" to="/">Register</Link>
        <Link className="text-white me-3" to="/login">Login</Link>
        <Link className="text-white me-3" to="/properties">Properties</Link>
        <Link className="text-white" to="/add-property">Add Property</Link>
      </div>
    </nav>
  );
}

export default Navbar;
