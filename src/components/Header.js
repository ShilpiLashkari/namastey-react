import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnName, setBtnName] = useState(["Login"]);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between lg:bg-amber-100  bg-pink-200 shadow-lg sm:bg-green-100 ">
      <div className="logo-container">
        <img className="logo w-32" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online : {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn  bg-green-100 px-4 rounded-md"
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
