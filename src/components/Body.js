import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useState } from "react";
const Body = () => {

    let listOfRestaurants = [
        {
            "data": {
                "id": "354531",
                "name": "Burger Seigneur",
                "cloudinaryImageId": "t8qo8yuimdpduzbozybj",
                "cuisines": [
                    "American",
                    "Continental",
                    "Beverages"
                ],
                "costForTwo": 120000,
                "deliveryTime": 28,
                "avgRating": "3.8",
            },
        },
        {
            "data": {
                "id": "354532",
                "name": "Dominos",
                "cloudinaryImageId": "t8qo8yuimdpduzbozybj",
                "cuisines": [
                    "American",
                    "Continental",
                    "Beverages"
                ],
                "costForTwo": 120000,
                "deliveryTime": 28,
                "avgRating": "4.7",
            },
        },
        {
            "data": {
                "id": "354533",
                "name": "MCD",
                "cloudinaryImageId": "t8qo8yuimdpduzbozybj",
                "cuisines": [
                    "American",
                    "Continental",
                    "Beverages"
                ],
                "costForTwo": 120000,
                "deliveryTime": 28,
                "avgRating": "4.1",
            },
        }
    ]

    return (
        <div className="body">
            <div className="search-container">
                {/* <input type="text" placeholder="Search..." /> */}
                {/* <button className="search-btn">Search</button> */}
                <button className="filter-btn" onClick={() => {
                    listOfRestaurants = listOfRestaurants.filter(res => res.data.avgRating > 4);
                    console.log(listOfRestaurants);
                }}>
                    Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* {resList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)} */}
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)}
            </div>
        </div >
    )
};

export default Body;