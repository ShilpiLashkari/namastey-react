import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
  const { deliveryTime } = resData.sla;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
