import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NavIcons from "./components/NavIcons";
import Card from "./components/Card";

function App() {
  return (
    <div class="homepage">
      <div class="flex items-center justify-between px-16 mb-2 p-3">
        <Header />
        <Navbar />
        <NavIcons />
      </div>
      <Card />
    </div>
  );
}

export default App;
