import React from 'react'
import './App.css'
import { getAuth, signOut } from 'firebase/auth'
import { app } from './firbase'
import profile from "./assets/profile.png"

const auth = getAuth(app)

function HomePage(props) {
  return (
    <>
    <img style={{width:'100px', height:'100px' , borderRadius:'100px'
    }} 
    src={props.image || profile} alt="Profile" />
    <h1> {props.name} </h1>
    <h2>{props.mob}</h2>
    <button onClick={()=>{
        signOut(auth)
    }}>Logout</button>
    </>
  )
}

export default HomePage