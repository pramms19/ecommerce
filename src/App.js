import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NavIcons from "./components/NavIcons";
import Hotpicks from "./components/Hotpicks";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import { axiosClient } from "./Api";

function App() {
  return (
    <div className="home">
      <div class="homepage px-16">
        <div class="border-box w-1440px flex items-center justify-between mb-2 p-4 text-lg">
          <Header />
          <Navbar />
          <NavIcons />
        </div>
        <Hotpicks />
      </div>
      <NewArrivals />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
