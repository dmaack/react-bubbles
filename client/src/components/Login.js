import React, { useState } from "react";
import axios from 'axios';
// import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
  console.log('Login props', props)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [login, setLogin] = useState({})
      console.log('login state', login)

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    // axiosWithAuth()
    axios
    .post('http://localhost:5000/api/login', login)
    .then(res => {
      console.log('this is the Login post data', res)
      localStorage.setItem('token', res.data.payload)
      props.history.push('/')
    })
    .catch(err => {
      console.log('No data', err)
      setLogin({username: '', password: ''})
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Enter Your Login Information Below</p>

      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name='username'
            placeholder='username'
            onChange={handleChange}
            value={login.username}
          />
          <input 
            type='password'
            name='password'
            placeholder='password'
            onChange={handleChange}
            value={login.password}

          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
