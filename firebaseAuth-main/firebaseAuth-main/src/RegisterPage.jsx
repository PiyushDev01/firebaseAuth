import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Otherlg from './Otherlg';
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged  } from "firebase/auth";
import { app } from './firbase';
import { getDatabase ,ref, set } from "firebase/database";


const db = getDatabase();

const auth= getAuth(app);



function RegisterPage(props) {
    
    document.title="Registration"
    
    const [User, setUser] = useState({fname:"", lname:"", email:"", pass:""})
    const Register=()=>{
        createUserWithEmailAndPassword(auth, User.email, User.pass).then((userCredential) => {   
            const user = userCredential.user;
            set(ref(db, `users/${user.uid}` ), {
                Name: `${User.fname} ${User.lname}`,
                email: User.email
            });
            alert("Hey👋 " + User.fname + ", You are now Registered ");
        }).catch((err)=>{
            alert(err);
        })

        setUser({fname:"", lname:"", email:"", pass:""})
    }

    



  return (
    <>
     <div className="container"  style={{padding:"1rem 3rem"}} >
     <Link to="/"><h2 id="back">&#10554;</h2></Link>
      <h2 style={{padding:'1rem'}}>REGISTER</h2>
   
      
      <input type="text" placeholder="First Name" value={User.fname} onChange={e=>{setUser({...User, fname:e.target.value})}}/>
      <input type="text" placeholder="Last Name" value={User.lname} onChange={e=>{setUser({...User, lname:e.target.value})}}/>
      <input type="email" required placeholder="Email" value={User.email} onChange={e=>{setUser({...User, email:e.target.value})}}/>
      <input type="password" required placeholder="Password" value={User.pass} onChange={e=>{setUser({...User, pass:e.target.value})}}/>
      <button onClick={Register} >Register</button>
      <Link to="/Login">Login</Link>

      <Otherlg />
    </div>
    </>
  )
}

export default RegisterPage