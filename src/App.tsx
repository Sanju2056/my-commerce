import "./App.css";
import Footer from "./pages/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./pages/NavBar/NavBar";

function App() {
  return (
    <div className="w-full">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
