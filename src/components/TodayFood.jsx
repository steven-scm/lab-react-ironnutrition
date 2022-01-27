
import React from "react";


const TodayFood = (props) => {


    const calculateTotal = () => {

    }

    return (
        <>
            <h2>Today's foods</h2>
            <ul>
                <li>{props.food.quantity} : {props.food.name} - {props.food.calories}</li>
            </ul>

        </>
    );
};






export default TodayFood;
