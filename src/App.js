import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NavIcons from "./components/NavIcons";
import Explore from "./components/Explore";
import Hotpicks from "./components/Hotpicks";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Detail from "./pages/Detail";
import Jewellery from "./pages/Jewellery";
import { Routes, Route } from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { CartProvider } from "./AppContext.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <CartProvider>
      <div className="home">
        <div className="border-box w-1440px flex items-center justify-between mb-2 p-4 text-lg px-16">
          <Header />
          <Navbar />
          <NavIcons />
        </div>

        <Routes>
          <Route path="*" element={<NotFound />} />
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

          <Route
            path="/wishlist"
            element={
              <>
                {" "}
                <Wishlist />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                {" "}
                <About />
              </>
            }
          />

          <Route
            path="/search"
            element={
              <>
                {" "}
                <SearchBar />
              </>
            }
          />
        </Routes>

        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </CartProvider>
  );
}

export default App;
