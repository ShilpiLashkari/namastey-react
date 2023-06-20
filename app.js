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

const RestaurantCard = (props) => {
  const { resImg, resName, cuisine, ratings, deliveryTime } = props
  return (
    <div className="res-card">
      <img alt="res-logo" src={props.resImg} className="res-logo" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.ratings}</h4>
      <h4>{props.deliveryTime}</h4>
    </div >
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
        <RestaurantCard resImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGjQBaWIt-hJleKCUBrxoZXC0yeYgdeKMXYsq-7SSjv7VVP4LCpsmnkVrDzfRBNh-PW4&usqp=CAU" resName="Biryani By Kilo" cuisine="Biryani, North Indian, Asian" ratings="4.4 stars" deliveryTime="25 minutes" />
        <RestaurantCard resImg="https://fox56news.com/wp-content/uploads/sites/24/2023/03/Kentucky_Fried_Chicken_Nuggets-e1679584687139.jpg?w=480&h=294&crop=1" resName="KFC" cuisine="Burger, Fast Foods" ratings="4.0 stars" deliveryTime="16 minutes" />
      </div>
    </div >
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
