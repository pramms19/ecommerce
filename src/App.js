import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NavIcons from "./components/NavIcons";

function App() {
  return (
    <div class="flex items-center justify-between px-16 mb-2 p-3">
      <Header />
      <Navbar />
      <NavIcons />
    </div>
  );
}

export default App;
