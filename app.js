import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";

// Find the restaurant list from the cards array
const findRestaurantList = () => {
  const cards = data?.data?.cards || [];
  for (const card of cards) {
    if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
      return card.card.card.gridElements.infoWithStyle.restaurants;
    }
  }
  return [];
};

const restList = findRestaurantList();

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resdata } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resdata.cloudinaryImageId}`}
        alt={resdata.name}
      />
      <h3>{resdata.name}</h3>
      <h4>{resdata.cuisines?.join(", ")}</h4>
      <h4>⭐ {resdata.avgRatingString}</h4>
      <h4>{resdata.locality}</h4>
      <h4>🕒 {resdata.sla?.slaString}</h4>
    </div>
  );
};

const Body = () => {
  if (!restList.length) {
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
        {restList.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resdata={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
