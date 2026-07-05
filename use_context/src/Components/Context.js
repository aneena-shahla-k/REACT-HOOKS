import React, { createContext, useState } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

export const userContext=createContext();  
function Context() {

    const [counter,setCounter] = useState(0);
    const [counter2,setCounter2] = useState(0);
    const arr = [1,2,3];
    const person={
        name:"John",
        age:'27',
        place:'calicut'
    }
    

  return (
    <div>
        {/* <Component1 /> */}
        <userContext.Provider value={{counter,setCounter,counter2,setCounter2,arr,person}}>
            <Component2/>
            <Component3/>

        </userContext.Provider>
    </div>
  )
}


export default Context