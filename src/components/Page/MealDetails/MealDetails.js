import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useMeals from "../../Hooks/useMeals";

const MealDetails = () => {
  const [mainImage, setMainImage] = useState();
  const { id } = useParams();
  const [meals] = useMeals();
  const meal = meals.find((meal) => meal.id === +id);

  console.log(meal);
  useEffect(() => {
    setMainImage(meal?.image);
  }, [meal]);

  const handleExtraImage = (event) => {
    setMainImage(event.target.src);
  };
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-xl-6 col-md-6">
          <h1>{meal?.title}</h1>
          <p>{meal?.description}</p>
          <h3 className="mb-3">$ {meal?.price}</h3>

          <Button className="rounded-pill" variant="danger">
            Add To Cart
          </Button>

          <div className="d-flex gap-4  mt-4">
            {meal?.extraImg?.map((img) => (
              <img
                key={Math.random()}
                onClick={handleExtraImage}
                width={100}
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="col-xl-6 col-md-6">
          <img className="img-fluid" src={mainImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
