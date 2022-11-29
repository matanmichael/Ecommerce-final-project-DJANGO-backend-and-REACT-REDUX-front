import React, { useState } from "react";
import {  useSelector,useDispatch } from "react-redux";
import {
  selectAdmin,
  doSignupAsync,
  selectStaff,
 
} from "./loginSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MyRegister.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [admin, setAdmin] = useState(false);
  const isAdmin = useSelector(selectAdmin);
  const [staff, setStaff] = useState(false);
  const isStaff = useSelector(selectStaff);
  const [newUserName, setNewUserName] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const notify = () => toast("Welcome - your registration is complete!");
  const dispatch = useDispatch();
  return (
    
      <div className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr></hr>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" onChange={(e) => setNewEmail(e.target.value)} required />

      <label for="username"><b>User Name</b></label>
      <input type="text" placeholder="Enter username" name="username" id="username" onChange={(e) => setNewUserName(e.target.value)} required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" onChange={(e) => setNewPwd(e.target.value)} required />

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" onChange={(e) => setNewPwd(e.target.value)} required />
      <hr></hr>

      <p>By creating an account you agree to our <Link to="/privacy">Terms & Privacy</Link>.</p>
      <button type="submit" className="MyRegister-registerbtn" onClick={() => {
          {
            notify();
          }
          dispatch(
            doSignupAsync({
              username: newUserName,
              password: newPwd,
              email: newEmail,
              admin: admin,
              staff: staff,
            })
          );
        }}>Register <ToastContainer /></button>
    <div className="MyRegister-container signin">
  <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
        </div>
        {isAdmin && (
        <div>
          admin:{" "}
          <input type="checkbox" onChange={(e) => setAdmin(e.target.checked)} />
          <input type="checkbox" onChange={(e) => setStaff(e.target.checked)} />
        </div>
        )}
    </div>
    
  );
};

export default Register;
