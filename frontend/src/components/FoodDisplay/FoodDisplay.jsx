import React, { useMemo } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = React.useContext(StoreContext);

  const filteredFoodList = useMemo(() => {
    console.log("func called");
    if (!category || category === "All") return food_list;
    return food_list.filter((item) => item.category === category);
  }, [category]);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item, index) => (
          <FoodItem
            id={item._id}
            description={item.description}
            price={item.price}
            name={item.name}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
