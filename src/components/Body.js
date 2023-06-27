import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const handleTopRated = () => {
    const filterList = listOfRestaurants.filter(
      (res) => res.data.avgRating > 4
    );
    setListOfRestaurants(filterList);
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json.data.cards[2].data.data.cards);
  };
  useEffect(() => {
    fetchData();
  }, []);
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

export default Body;
