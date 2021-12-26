import React from 'react'

const Greet = (props) =>{
    console.log(props)
    return (
        <div>
        <p>Hello {props.name} a.k.a {props.heroName}</p>
        <p> {props.gender} is {props.sex} of  {props.parentsName}</p>
        </div>
    ) 
} 

export default Greet