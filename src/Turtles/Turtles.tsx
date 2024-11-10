import React, { useEffect, useState } from 'react'
import Extras from './Extras';
import DisplayTurtles from './DisplayTurtles';

interface PizzaToppings{
    name: string;
    img: string;
}

interface Turtle {
    id: string;
    name: string;
    img: string;
    pizzaToppings: PizzaToppings[]
};



const Turtles = () => {
    const [turtles, setTurtles] = useState <Turtle[]>([]);
    const [toppings, setToppings] = useState <PizzaToppings[]>([]);
    useEffect(() => {
        fetch('/data.json')
        .then((res) => {
            return res.json();
        })
        .then(data => setTurtles(data))
        .catch(error => console.error('There has been a problem with your fetch operation:', error))
    }, [])

    const AddToppings = (newTopping: PizzaToppings) => {

        if (toppings.some(topping => topping.name === newTopping.name)) {
             ("This topping olrady added");
        }
        if(toppings.length >= 5 )
            return alert("You can't Add mor then 5 toppings")

        setToppings([...toppings, newTopping])
    }
  return (
    <>
        <DisplayTurtles tortles={turtles} AddToppings={AddToppings}/>
        {toppings && <Extras toppings={toppings}/>}
    </>
  )
}

export default Turtles