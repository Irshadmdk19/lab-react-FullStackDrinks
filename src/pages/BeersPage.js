import React from "react";
import Header from "../components/Header";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
;

const BeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <div className="beers-page">
        {beers.map((beer) => (
          <div key={beer._id} className="beer">
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <small>Contributed by: {beer.contributed_by}</small>
            <Link to={`/beers/${beer._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BeersPage;
