import React, { createContext } from "react";
import useMeals from "../../Hooks/useMeals";
import Menu from "../Menu/Menu";
import Banner from "./Banner/Banner";

export const MenuContext = createContext([]);

const Home = () => {
  const [meals] = useMeals();
  return (
    <main>
      <Banner />
      <MenuContext.Provider value={[meals]}>
        <Menu />
      </MenuContext.Provider>
    </main>
  );
};

export default Home;
