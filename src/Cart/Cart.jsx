import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import logo from "../assets/cart.png";
import "../styling/cart.css";

function Cart() {
  // getting props from redux:
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const subTotal = useSelector((state) => state.cart.totalAmount);
  const selectedAddress = useSelector((state) => state.address.selectedAddress);
  const { city, street_name, street_address, zip_code, state, country } =
    selectedAddress;

  if (cartItems.length == 0) {
    return (
      <div className="nodata-image">
        <img src={logo} alt="" />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="Card">
        <ul>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </ul>
        <div className="cart-summary">
          <h2>{`Items : ${cartQuantity}`}</h2>
          <h2>{`CartSubtotal : $${subTotal.toFixed(1)} `}</h2>
          <br />
          <p>{`Address : ${city}, ${street_name}, ${street_address}, ${zip_code}, ${state}, ${country} `}</p>
          <Link to={"/cart/thanks"}>
            <button>Proceed to pay</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
