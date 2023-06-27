import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const handleTopRated = () => {
    const filterList = listOfRestaurants.filter(
      (res) => res.data.avgRating > 4
    );
    setListOfRestaurants(filterList);
  };

  return (
    <div className="body">
      <div className="search-container">
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
