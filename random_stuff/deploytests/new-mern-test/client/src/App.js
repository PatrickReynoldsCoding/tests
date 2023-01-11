import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Initialize state
  const [animals, setAnimals] = useState([]);

  const getAnimals = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/api/animals/mammals");
      console.log("pulling animals");
      return await res.json();
    } catch (err) {}
  };

  const loadAnimals = () => {
    getAnimals() // api function
      .then((res) => setAnimals(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadAnimals();
  }, []); // this is the dependancy array. [] means it will run once when the page opens

  console.log(animals);

  return <h1>{animals.name}</h1>;
}

export default App;
