import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeersPage from "./pages/BeersPage";
import SingleBeerPage from "./pages/SingleBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* List All Beers */}
        <Route path="/beers" element={<BeersPage />} />
        
        {/* Single Beer */}
        <Route path="/beers/:beerId" element={<SingleBeerPage />} />
        
        {/* Random Beer */}
        <Route path="/random-beer" element={<RandomBeerPage />} />
        
        {/* New Beer */}
        <Route path="/new-beer" element={<NewBeerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
