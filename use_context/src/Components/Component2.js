import React, {useContext} from 'react'
import { userContext } from './Context'

 function Component2() {
    const {counter,setCounter,person}=useContext(userContext)
  return (
    <div>
        <h1>counter value:{counter}</h1>
        <button onClick={()=>setCounter((counter)=>counter+1)}>click counter {counter} </button>
        <h1>
            Person details:{person.name} <br/>
            {person.age}<br/>
            {person.place}
        </h1>
    </div>
  )
} 

export default Component2
