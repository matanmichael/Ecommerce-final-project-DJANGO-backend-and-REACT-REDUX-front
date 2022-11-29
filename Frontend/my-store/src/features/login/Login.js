import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  doSigninAsync,
  selectEmail,
  selectUserName,
  selectToken,
  selectAdmin,
} from "./loginSlice";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "./MyLogin.css";
const Login = () => {
  const isAdmin = useSelector(selectAdmin);
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);
  const [admin, setAdmin] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [myToken, setMyToken] = useState(token)
  
  return (
    <div className="MyLogin-container">
      {userName && <div>hello: {userName}</div>}

      <div className="MyLogin-row">
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <div className="MyLogin-col">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={(e) => setNewUserName(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setNewPwd(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setNewEmail(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <input
            type="submit"
            value="Login"
            onClick={() =>
              dispatch(
                doSigninAsync({
                  username: newUserName,
                  password: newPwd,
                  email: email,
                })
              )
            }
          ></input>
        </div>
      </div>

      <div className="MyLogin-bottom-container">
        <div className="MyLogin-row">
          <div className="MyLogin-col">
            <Link
              href
              to="/register"
              style={{ color: "white" }}
              className="MyLogin-btn"
            >
              SIGN-UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
