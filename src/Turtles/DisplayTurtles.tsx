import React from 'react';

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

interface Props {
    tortles: Turtle[];
    AddToppings: (toppings: PizzaToppings) => void;
}

const DisplayTurtles = ({tortles, AddToppings}: Props) => {
  return (    
    <>
    <div className='card-list'>
    {tortles.map((tortle) => (
     <div key={tortle.id} className='card'>
         <h3>{tortle.name}</h3>
         <img
           src={tortle.img}
           alt={`${tortle.img}'s Turtles`}
           style={{ width: "50px", height: "50px" }}
         />
         {tortle.pizzaToppings.map((topping) => (
            <>
            <button onClick={() => AddToppings(topping)}>{topping.name}</button>
</>

         ))}

        </div>
     ))} 
    </div>
 </>
   )
}

export default DisplayTurtles