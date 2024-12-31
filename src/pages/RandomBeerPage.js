import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const RandomBeerPage = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => setBeer(data))
      .catch((err) => console.error(err));
  }, []);

  if (!beer) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="random-beer-page">
        <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>First Brewed: {beer.first_brewed}</p>
        <p>Attenuation Level: {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
      </div>
    </>
  );
};

export default RandomBeerPage;
