import React from 'react';
import { useState } from "react";
import TodayFood from "./../components/TodayFood";






const FoodBox = (props) => {

    const [isClicked, setIsClicked] = useState(false);


    console.log("props ", props);
    const food = props.food;
    console.log("food or props.food ", food);


    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={food.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{food.name}</strong> <br />
                            <small>{food.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={() => setIsClicked(!isClicked)}>
                                +
                            </button>
                            {isClicked && (<TodayFood food={food} />)}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );




}

export default FoodBox;

