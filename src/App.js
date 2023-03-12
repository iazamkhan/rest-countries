import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import './App.css'
import SingleCountry from "./components/SingleCountry/SingleCountry";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
