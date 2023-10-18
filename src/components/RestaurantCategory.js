import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    return setShowIndex();
  };
  return (
    <div>
      {/* Accordion header */}
      <div
        className="w-6/12 mx-auto my-6  cursor-pointer bg-gray-50 shadow-lg p-4 "
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} dummy="dummy" />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
