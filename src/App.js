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
import { axiosClient } from "./Api";

function App() {
  return (
    <div className="home">
      <div className="border-box w-1440px flex items-center justify-between mb-2 p-4 text-lg px-16">
        <Header />
        <Navbar />
        <NavIcons />
      </div>
      <div>
        <Explore />
      </div>
      <div className="px-16">
        <Hotpicks />
        <Detail />
      </div>
      <NewArrivals />
      <Categories />

      <Footer />
    </div>
  );
}

export default App;
