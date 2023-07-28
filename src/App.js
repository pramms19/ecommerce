import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NavIcons from "./components/NavIcons";
import Hotpicks from "./components/Hotpicks";
import { axiosClient } from "./Api";

function App() {
  return (
    <div class="homepage px-16">
      <div class="flex items-center justify-between mb-2 p-4 text-lg">
        <Header />
        <Navbar />
        <NavIcons />
      </div>
      <Hotpicks />
    </div>
  );
}

export default App;
