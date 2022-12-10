import React from 'react';
import { useState } from 'react';
import {Auth} from '../../js/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Register=()=>{
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [repassword,setRepassword] = useState("");
	const [error,setError] = useState("");
	
	//validate password
	const validatePassword =(e)=>{
	let isValid = true
  if (password !== '' && repassword !== ''){
    if (password !== repassword) {
      isValid = false
      setError('Passwords does not match')
    }
  }
  return isValid
}
	//register account
	const register = e => {
  e.preventDefault()
  setError('')
  if(validatePassword()) {
    // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(Auth, email, password)
      .then((res) => {
          console.log(res.user)
        })
      .catch(err => setError(err.message))
  }
  setEmail('')
  setPassword('')
  setRepassword('')
}
	
	return(
		<>
		<form>
      <label>Enter your Email:
        <input
			required
          type="email" 
          placeholder="firstname@example.com"
			minLength="8"
			value={email}
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
		<label>ReEnter your Password:
        <input
			required
          type="password" 
          placeholder="password"
          onChange={(e) => setRepassword(e.target.value)}
        />
      </label>
		<input type="submit" value="submit" onClick={register} />
    </form>
		<h1>{error}</h1>
	</>
	);
}
export default Register