import React, { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [fullList, setFullList] = useState([]);
  const [restList, setRestList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1542045&lng=85.8918454&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const cards = json?.data?.cards || [];
      let restaurants = [];

      for (const card of cards) {
        if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
          break;
        }
      }

      setFullList(restaurants);
      setRestList(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const handleFilterToggle = () => {
    if (isFiltered) {
      setRestList(fullList);
      setIsFiltered(false);
    } else {
      const filtered = fullList.filter((res) => res.info.avgRating > 4.1);
      setRestList(filtered);
      setIsFiltered(true);
    }
  };

  if (fullList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-bar">Search</div>

      <button onClick={handleFilterToggle} className="searchFilter-btn">
        {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
      </button>

      <div className="resturant-cards">
        {restList.map((restaurant) => (
          <ResturantCard
            key={restaurant?.info?.id}
            resdata={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
