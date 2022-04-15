import React, { useContext } from "react";
import { MenuContext } from "../Home/Home";

const MealDetails = () => {
  const [meals] = useContext(MenuContext);
  console.log(meals);
  return (
    <div className="container py-5">
      <h1>Meal Details Page</h1>
    </div>
  );
};

export default MealDetails;
