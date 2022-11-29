import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  deleteCart,
  selectMyCart,
  removeItemFromCart,
} from "../cart/cartSlice";
import { sendorderAsync } from "../order/orderSlice";
import { selectToken } from "../login/loginSlice";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MyCart.css";
import { Button } from "react-bootstrap";

const MyCart = () => {
  const token = useSelector(selectToken);
  const myCart = useSelector(selectMyCart);
  const dispatch = useDispatch();
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    myCart.forEach((item) => {
      totalQuantity += item.amount;
      totalPrice += item.price * item.amount;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div className="MyCart-Cart-Container">
      <div className="MyCart-Header">
        <h3 className="MyCart-Heading">Shopping Cart</h3>
        <h5 className="MyCart-Action" onClick={() => dispatch(deleteCart())}>
          Remove all
        </h5>
      </div>
      {myCart &&
        myCart.map((product) => (
          <div className="MyCart-Cart-Items">
            <div className="MyCart-image-box">
              <img
                src={`https://matan1902.onrender.com/${product.image}`}
                style={{ height: "120px" }}
              />
            </div>
            <div className="MyCart-about">
              <h1 className="MyCart-title">{product.desc}</h1>
            </div>
            <div className="MyCart-counter">
              <div
                className="MyCart-btn"
                onClick={() => dispatch(decrementQuantity(product._id))}
              >
                -
              </div>
              <div className="MyCart-count">{product.amount}</div>
              <div
                className="MyCart-btn"
                onClick={() => dispatch(incrementQuantity(product._id))}
              >
                +
              </div>
            </div>
            <div className="MyCart-prices">
              <div className="MyCart-amount">₪{product.price}</div>

              <div
                className="MyCart-remove"
                onClick={() => dispatch(removeItemFromCart(product._id))}
              >
                <u>Remove</u>
              </div>
            </div>
          </div>
        ))}
      <hr></hr>
      <div className="MyCart-checkout">
        <div className="MyCart-total">
          <div>
            <div className="MyCart-Subtotal">Sub-Total</div>
            <div className="MyCart-items">{getTotal().totalQuantity}</div>
          </div>
          <div className="MyCart-total-amount">₪ {getTotal().totalPrice}</div>
        </div>
        <NavLink to="/checkout"><Button>Cheack Out</Button></NavLink>
      
        
      </div>

      
    </div>
  );
};

export default MyCart;
