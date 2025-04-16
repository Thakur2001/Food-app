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

export default ResturantCard;
