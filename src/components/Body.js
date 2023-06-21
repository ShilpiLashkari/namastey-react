import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button className="search-btn">Search</button>
            </div>
            <div className="res-container">
                {resList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)}
            </div>
        </div >
    )
};

export default Body;