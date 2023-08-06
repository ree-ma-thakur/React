import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="">{item.card.info.name}</span>
              <span> - ₹ {item?.card?.info?.price / 100 || 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12">
            <div className="absolute">
              <button className="p-1 mx-8 text-sm rounded-lg shadow-lg m-auto bg-black text-white">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
