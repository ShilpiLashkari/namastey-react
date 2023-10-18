import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const dummy = "Dummy Data";
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    // <div className="menu">
    //   <h1>Welcome To {name} </h1>
    //   <p> {cuisines.join(", ")}</p>
    //   <h3>{costForTwoMessage}</h3>
    //   <ul>
    //     {itemCards.map((item) => (
    //       <li key={item.card.info.id}>
    //         {" "}
    //         {item.card.info.name} for ₹{" "}
    //         {(item.card.info.price || item.card.info.defaultPrice) / 100}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        const isSectionExpanded = showIndex === index;
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category.card.card}
            showItems={isSectionExpanded}
            setShowIndex={() => setShowIndex(isSectionExpanded ? null : index)}
            dummy={dummy}
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
