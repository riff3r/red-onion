import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import Meal from "../../../Layout/Meal/Meal";
import { MenuContext } from "../../Home/Home";

const Lunch = () => {
  const [meals] = useContext(MenuContext);

  console.log(meals);
  return (
    <div>
      <Row className="">
        {meals
          .filter((meal) => meal.category === "lunch")
          .map((meal) => (
            <Meal key={meal.id} meal={meal} />
          ))}
      </Row>
    </div>
  );
};

export default Lunch;
