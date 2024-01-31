import { useSelector } from "react-redux";
import "../styling/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/add">Add Product </Link>
            </li>
            <li className="nav-item">
              <Link to="/Products">All Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/Cart">Cart({cartQuantity})</Link>
            </li>
            <li className="nav-item">
              <Link to="/address">Select Address</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
