import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import Meal from "../../../Layout/Meal/Meal";
import { MenuContext } from "../../Home/Home";

const Breakfast = () => {
  const [meals] = useContext(MenuContext);

  return (
    <Row>
      {meals
        .filter((meal) => meal.category === "breakfast")
        .map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
    </Row>
  );
};

export default Breakfast;
