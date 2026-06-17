import React from 'react'

function Props(props) {
    // const name="Abhay";
    // const rollno="23B201012";
    // const course="B.Tech";
  return (
    <>
    <h1 style={{color:'red'}}>Props</h1>
    <div style={{display:'flex', margin:'10px', gap:'20px'}}>
    <div style={{backgroundColor:'#a15d5d'}}>
    <h2> {props.name}</h2>
    <h3> {props.rollno}</h3>
    <h3> {props.course}</h3>
    </div>

     <div style={{backgroundColor:'#59811e'}}>
    <h2> {props.name}</h2>
    <h3> {props.rollno}</h3>
    <h3> {props.course}</h3>
    </div>

     <div style={{backgroundColor:'#1c2976'}}>
    <h2> {props.name}</h2>
    <h3> {props.rollno}</h3>
    <h3> {props.course}</h3>
    </div>
    </div>
    </>
  )
}

export default Props
     
    

