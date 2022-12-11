import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./dist/login.css"

const LoginForm=()=>{
    const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [error,setError] = useState("");
    const { currentUser, login:logins} = useAuth();
	let navigate = useNavigate();

    const Login=(e)=>{
            e.preventDefault()
            setError('')
            logins(email,password).then((res) => {
                // console.log(res.user);
                navigate('/dashboard');
              })
            .catch(err => setError(err.message))

            setEmail('')
  setPassword('')
    }
    return(
        <>
        <form className='Form'>
      <label>Enter your Email:
        <input
			required
          type="email" 
          placeholder="firstname@example.com"
			minLength="8"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
			<label>Enter your Password:
        <input
			required
          type="password" 
          placeholder="password"
			minLength="8"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
		<input type="submit" value="Login" onClick={Login} />
    </form>
    <h1>{error}</h1>
    </>
    );
}

export default LoginForm;