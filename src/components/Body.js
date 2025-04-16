import React from "react";
import data from "../../data.json";
import ResturantCard from "./ResturantCard";

const findResturantList = () => {
  const cards = data?.data?.cards || [];
  for (const card of cards) {
    if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
      return card.card.card.gridElements.infoWithStyle.restaurants;
    }
  }
  return [];
};

const restList = findResturantList();

const Body = () => {
  if (!restList || !restList.length) {
    return (
      <div className="body">
        <div className="error-message">No restaurants found</div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="resturant-cards">
        {restList.map((resturant) => (
          <ResturantCard key={resturant?.info?.id} resdata={resturant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
