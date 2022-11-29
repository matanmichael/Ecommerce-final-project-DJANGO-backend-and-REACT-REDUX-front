import React, { useState } from "react";
import { sendorderAsync} from "./orderSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectToken} from "../login/loginSlice";
import { ToastContainer,toast } from "react-toastify";
import {
  
  deleteCart,
  selectMyCart
  
} from "../cart/cartSlice";
import Button from "react-bootstrap/Button";

const CheckOut = () => {
  const notify = () => toast("Thank you, your order will be delivered");
  const dispatch = useDispatch();
  const myCart = useSelector(selectMyCart);
  const token = useSelector(selectToken);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    myCart.forEach((item) => {
      totalQuantity += item.amount;
      totalPrice += item.price * item.amount;
    });
    return { totalPrice, totalQuantity };
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [postalCode, setpostalCode] = useState("");

  return (
    <div className="row">
      <div className="col-75">
        <div className="container">
          <div className="row">
            <div className="col-50">
              <h3>Billing Address</h3>
              <label for="fname">
                <i className="fa fa-user"></i> First Name
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First Name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label for="lname">
                <i className="fa fa-user"></i> Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last Name"
                required
                onChange={(e) => setLastName(e.target.value)}
              />

              <label for="adr">
                <i className="fa fa-address-card-o"></i> Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Street Address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
              <label for="city">
                <i className="fa fa-institution"></i> City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City Name"
                required
                onChange={(e) => setCity(e.target.value)}
              />

              <div className="row">
                <div className="col-50">
                  <label for="Country">Country</label>
                  <input
                    type="text"
                    id="Country"
                    name="Country"
                    placeholder="Country"
                    required
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="col-50">
                  <label for="Postal Code">Postal Code</label>
                  <input
                    type="text"
                    id="Postal Code"
                    name="Postal Code"
                    placeholder="Postal Code"
                    required
                    onChange={(e) => setpostalCode(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
         {token &&<Button
              variant="success"
              onClick={() => {
                {
                  notify();
                }
                dispatch(
                  sendorderAsync({ myCart , userToken: token }),
                  dispatch(deleteCart())
                );
              }}
            >
              send order <ToastContainer />
            </Button> }
          

        </div>
      </div>

      <div className="col-25">
        <div className="container">
          <span className="price" style={{ color: "black" }}>
            <i className="fa fa-shopping-cart">Cart</i>{" "}
            <b>{getTotal().totalQuantity}</b>
          </span>

          <h4>
            {myCart.map((product) => (
              <div>
                {product.amount} {product.desc}{" "}
              </div>
            ))}
          </h4>

          <hr></hr>

          <p>
            Total{" "}
            <span className="price" style={{ color: "black" }}>
              <b>₪ {getTotal().totalPrice}</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
