import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
        possimus cumque officiis porro rem delectus, obcaecati ducimus quod,
        harum ipsum voluptatibus atque? Dolor dicta porro possimus voluptas
        impedit voluptatem voluptatibus?
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div className="explore-menu-list-item" key={index}>
            <img src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
