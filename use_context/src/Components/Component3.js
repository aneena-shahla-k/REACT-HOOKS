import React, { useContext } from 'react'
import {userContext} from './Context'

export default function Component3() {
    const {counter2,setCounter2,arr}=useContext(userContext)
  return (
    <div>
        <h1>Counter Value:{counter2}</h1>
        <button onClick={()=>setCounter2((counter)=>counter+1)} >click counter</button>
    </div>
  )
}
