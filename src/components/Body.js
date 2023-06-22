import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useState } from "react";
const Body = () => {

    let [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
        <div className="body">
            <div className="search-container">
                <button className="filter-btn"
                    onClick={() => {
                        const filterList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
                        setListOfRestaurants(filterList);
                    }}>
                    Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />))}
            </div>
        </div >
    )
};

export default Body;