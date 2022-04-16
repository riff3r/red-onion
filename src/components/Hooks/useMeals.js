import React, { useEffect, useState } from "react";

const useMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch("/meals.json");
      let json = await response.json();
      setMeals(json);
    };

    fetchJSON();

    // fetch("meals.json")
    //   .then((res) => res.json())
    //   .then((data) => setMeals(data))
    //   .catch((err) => console.error(err));
  }, []);

  return [meals, setMeals];
};

export default useMeals;
