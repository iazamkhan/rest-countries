import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import './App.css'
import SingleCountry from "./components/SingleCountry/SingleCountry";


function App() {

  const mode = useSelector(state => state)

  return (
    <div className="App" style={mode ? { color: "white", backgroundColor: "#343a40" } : { color: "black", backgroundColor: "white" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
