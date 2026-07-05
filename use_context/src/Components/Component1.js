import React, { useState } from 'react'

function Component1() {
    const [name,setName]=useState("user");
    return (
        <div>
            <h1>Hello</h1>
            <Component2 name={name}/>
        </div>
    );
}

function Component2({name}){
    return(
        <div>
            <h1>Component2</h1>
            <Component3 name={name} />
        </div>
    )
}
function Component3({name}){
    return(
        <div>
            <h1>Component3</h1>
            <Component4 name={name} />
        </div>
    )
}
function Component4({name}){
    return(
        <div>
            <h1>Component4</h1>
            <Component5 name={name} />
        </div>
    )
}
function Component5({name}){
    return(
        <div>
            <h1>Component5</h1>
            <h2>Hello {name} again</h2>
        </div>
    )
}

export default Component1