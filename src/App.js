import "./App.css";
import Details from "./components/Availability/Details";
import Footer from "./components/Footer/Footer";
import InnerPage from "./components/InnerPage/InnerPage";
import Navbar from "./components/Navbar/Navbar";
import Results from "./components/Result/Result";
import { useState } from 'react';

function App() {

  const [showResult, setShowResult] = useState(false)

  

  return (
    <div className="App">
      <Navbar />
      <Details />
      <InnerPage onFindClick={() => setShowResult(!showResult)}/>
      {showResult && <Results />}
      <Footer />
    </div>
  );
}

export default App;
