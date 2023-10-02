import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
  const { deliveryTime } = resData.sla;
  return (
    <div className="m-4 p-4 w-[247px] rounded-lg bg-gray-200 hover:bg-gray-300">
      <img
        alt="res-logo "
        src={CDN_URL + cloudinaryImageId}
        className="res-logo rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const isOpenOrNOt = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-400 text-white m-2 p-2 rounded-lg">
          HOC Label
          {/* This Higher Order Component label - This label is appplied when a
          restaurant is Closed */}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
