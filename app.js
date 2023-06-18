import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/003/513/751/original/cute-monkey-hanging-tree-cartoon-illustration-free-vector.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Biryani By Kilo</h3>
    </div>
  );
}


const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div >
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
