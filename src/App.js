import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Page/Home/Home";
import Login from "./components/Page/Login/Login";
import MealDetails from "./components/Page/MealDetails/MealDetails";
import Breakfast from "./components/Page/Menu/Breakfast/Breakfast";
import Dinner from "./components/Page/Menu/Dinner/Dinner";
import Lunch from "./components/Page/Menu/Lunch/Lunch";
import NotFound from "./components/Page/NotFound/NotFound";
import SignUp from "./components/Page/SignUp/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Breakfast />}></Route>
          <Route index path="breakfast" element={<Breakfast />}></Route>
          <Route path="lunch" element={<Lunch />}></Route>
          <Route path="dinner" element={<Dinner />}></Route>
        </Route>
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
