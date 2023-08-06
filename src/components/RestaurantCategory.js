import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //controlled component because of showItems from parent component

  const handleHeaderClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => handleHeaderClick()}
      >
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>⬇</span>
      </div>
      <div>{showItems && <ItemList items={data?.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
