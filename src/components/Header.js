import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [btnName, setBtnName] = useState(["Login"]);
  console.log("Header Render 1");
  useEffect(() => {
    console.log("use effect hook");
  }, []);
  console.log("Header Render 2");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
