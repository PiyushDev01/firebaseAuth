import {  useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firbase";
import Otherlg from "./Otherlg";





const auth = getAuth(app);

function LoginPage() {

    document.title="Login"

  const [User, setUser] = useState({ email: "", pass: "" });

  const Login = () => {
    signInWithEmailAndPassword(auth, User.email, User.pass)
      .then(() => {
      alert("logged in")
      
      })
      .catch((err) => {
        alert(err);
      });
    setUser({ email: "", pass: "" });
  };

  return (
    
    <div className="container">
      

      <h2 style={{padding:'2rem'}} >LOGIN.</h2>
      <input
        type="email"
        required
        placeholder="Email"
        value={User.email}
        onChange={(e) => {
          setUser({ ...User, email: e.target.value });
        }}
      />
      <input
        type="password"
        required
        placeholder="Password"
        value={User.pass}
        onChange={(e) => {
          setUser({ ...User, pass: e.target.value });
        }}
      />
      <button onClick={Login}>Login</button>
      <Link to="/Register">Register</Link>
      <Otherlg />
    </div>
  
  );
}

export default LoginPage;
