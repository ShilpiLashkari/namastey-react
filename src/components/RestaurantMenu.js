import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        setResInfo(json.data);
    }
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0].card?.card?.info;
    console.log(resInfo?.cards[0].card?.card?.info);
    return (resInfo === null) ? (<Shimmer />) :
        (<div className="menu">
            <h1>Name: {name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        </div>)

}
export default RestaurantMenu;