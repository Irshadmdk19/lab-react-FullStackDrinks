import React, { useState } from "react";
import Header from "../components/Header";

const NewBeerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => alert("Beer created successfully!"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Header />
      <div className="new-beer-page">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="text" name="tagline" placeholder="Tagline" onChange={handleChange} required />
          <textarea name="description" placeholder="Description" onChange={handleChange} required />
          <input type="text" name="first_brewed" placeholder="First Brewed" onChange={handleChange} required />
          <input type="text" name="brewers_tips" placeholder="Brewers Tips" onChange={handleChange} required />
          <input type="number" name="attenuation_level" placeholder="Attenuation Level" onChange={handleChange} required />
          <input type="text" name="contributed_by" placeholder="Contributed By" onChange={handleChange} required />
          <button type="submit">Add Beer</button>
        </form>
      </div>
    </>
  );
};

export default NewBeerPage;
