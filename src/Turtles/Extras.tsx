import React from 'react'

interface PizzaToppings{
    name: string;
    img: string;
}

interface Props {
    toppings: PizzaToppings[];
}

const PizzaToppings = ({toppings}: Props) => {
  return (
    <>
    <h1>Our order</h1>
    <div className="card-list"
     style={{backgroundColor: toppings.length === 5 ? "red": "waite"}}>
        {toppings.map((topping) => (
          <div key={topping.name} className="card">
            <h3>{topping.name}</h3>
            <img
                src={topping.img}
                alt={`${topping.img}'s Toppings`}
                style={{ width: "50px", height: "50px" }} />
          </div>  
        ))}
    </div>
    </>
  )
}

export default PizzaToppings