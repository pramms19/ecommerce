import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NavIcons from "./components/NavIcons";
import Explore from "./components/Explore";
import Hotpicks from "./components/Hotpicks";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Detail from "./components/Detail";
import Jewellery from "./components/Jewellery";
import { axiosClient } from "./Api";
import { Routes, Route } from "react-router-dom";
import Men from "./components/Men";
import Women from "./components/Women";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="home">
      <div className="border-box w-1440px flex items-center justify-between mb-2 p-4 text-lg px-16">
        <Header />
        <Navbar />
        <NavIcons />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <Explore />
              </div>
              <div className="px-16">
                <Hotpicks />
              </div>
              <NewArrivals />
              <Categories />
            </>
          }
        />

        <Route
          path="/products/:id"
          element={
            <>
              {" "}
              <Detail />
            </>
          }
        />
        <Route
          path="/products/categories/jewelery"
          element={
            <>
              {" "}
              <Jewellery />
            </>
          }
        />

        <Route
          path="/products/categories/men's clothing"
          element={
            <>
              {" "}
              <Men />
            </>
          }
        />

        <Route
          path="/products/categories/women's clothing"
          element={
            <>
              {" "}
              <Women />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              {" "}
              <Login />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              {" "}
              <Cart />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
