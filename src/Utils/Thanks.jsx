import React from "react";
import "../styling/thanks.css";
import logo from "../assets/moneyEmoji.png";
import { useSelector } from "react-redux";
function Thanks() {
  const totalMoney = useSelector((state) => state.cart.totalAmount);
  return (
    <div className="thank-you-card">
      <h2>Thank You for Shopping with Us!</h2>
      <div className="total-card">
        <h2>You Spent {totalMoney}$</h2>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Thanks;
