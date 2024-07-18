import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export let ur='null';


document.title="Home"
const Home = () => {
  
  const navigate = useNavigate();

  const toRegister = (utype) => {
    navigate("/Login");
    ur=utype;
  };

  return (
    
    <>
      <h1>Login as </h1>

      <button onClick={()=>toRegister("Student")}>Student</button>

      <button onClick={()=>toRegister("Teacher")}>Teacher</button>
    </>
  );
};


export default Home;
