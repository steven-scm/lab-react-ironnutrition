import React from 'react';
// import logo from './logo.svg';
import './App.css';

import foods from './foods.json'
import FoodBox from "./components/FoodBox";
import { useState } from "react";

import Search from "./components/Search";
import TodayFood from "./components/TodayFood";





const baseFood = [...foods];
console.log("BASEFOOD ", baseFood);


function App() {
  // const pizza = {
  //   "name": "Pizza",
  //   "calories": 400,
  //   "image": "https://i.imgur.com/eTmWoAN.png",
  //   "quantity": 0
  // }

  const [foods, setFoods] = useState(baseFood);

  console.log("UseState", useState);
  console.log("useState(baseFood) ", useState(baseFood));
  console.log("The state: ", foods);
  console.log("The setFoods: ", setFoods);

  const [searchedString, setSearchedString] = useState("");


  const [isClicked, setIsClicked] = useState(false);

  // const [todaysFood, setTodaysFood] = useState([]);



  const addFood = (food) => {
    setFoods([...foods, food]);
  };


  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    const food = { name: name, calories: calories, image: image };
    console.log(food);
    addFood(food);
    setName("");
    setCalories("");
    setImage("");
  };



  let searchedFoods = null;
  if (searchedString !== "") {
    searchedFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedFoods = foods;
  }


  // return (
  //   <div className="App">
  //     <h1>1 FoodBox</h1>
  //     <FoodBox food={pizza} />
  //   </div>
  // );



  return (

    <div className="App">
      <h1 class="title">IronNutrition</h1>
      <br></br>
      <div className='today-food-list' style={{ margin: "auto", width: "500px", height: "500px", backgroundColor: "dodgerblue", border: "1px black solid" }}>
        <TodayFood food={foods} />
      </div>
      <Search searchedString={searchedString} callbackSearch={setSearchedString} />
      <div className="Create">
        <button className="button is-primary" onClick={() => setIsClicked(!isClicked)}>Add a new food!</button>
        {isClicked && (

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="colories">Number of calories:</label>
            <input
              type="text"
              name="calories"
              id="calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <button>Add food</button>
          </form>
        )}
      </div>

      <div className="food-list">
        {searchedFoods.map((food) => {
          console.log(food)
          return (
            <FoodBox food={food} />
          );
        })}
      </div>
    </div >



  )


}

export default App;
