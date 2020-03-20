import React from "react";
import './styles/login.css'


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className="login-form">
      <p>Build a login page here</p>
      <form onChange={() => console.log('form updated....')}>
        <label>Username: </label>
        <input type="text" name="username"/>

        <label>Password</label>
        <input type="password" name="password"/>

        <button onClick={(e) => { e.preventDefault(); console.log('button updated....')}}>Log In</button>

      </form>

      </div>
    </>
  );
};

export default Login;
