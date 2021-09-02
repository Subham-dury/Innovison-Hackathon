import "./App.css";
import Details from "./components/Availability/Details";
import Footer from "./components/Footer/Footer";
import InnerPage from "./components/InnerPage/InnerPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Details />
      <InnerPage />
      <Footer />
    </div>
  );
}

export default App;
