import React, { useState, useEffect } from 'react';

import Counter from './Counter';
const App = () => {
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
    );
    const dishes = await res.json();
    setDishes(dishes);
  };

  useEffect(() => {
    fetchDishes();
  }, []); // <= Run useEffect only when dishes = [] !

  return (
    <div className="main-wrapper">
      <h1>useEffect Fetch</h1>
      {dishes.map(dish => (
        <article className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => (
              <span>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default App;
