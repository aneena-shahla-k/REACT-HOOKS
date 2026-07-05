import React, { useState } from 'react'
import { Button } from "react-bootstrap";

export const Header = () => {
    const [ colour,setColour ] =useState("Green");
    const [ count,setCount ] =useState(0);

    const changeColour=()=>{
        setColour("Red");
    };
    const increment=()=>{
        setCount(count + 1 );
    }
    const decrement=()=>{
        setCount(count - 1 );
    }
  return (
    <div>
        <h1 className='bg-warning text-white' >useState Hook in React </h1>
        <h2>My favourite colour is {colour}</h2>
        <Button onClick={changeColour}>Change Colour</Button>

        <h1>Counter is {count}</h1>
        <Button className='m-2 bg-success' onClick={increment}>+</Button>
        <Button className='m-2 bg-danger' onClick={decrement}>-</Button>
    </div>
  )
}
