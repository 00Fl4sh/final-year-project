// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import httpClient from "../httpClient";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



  const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate=useNavigate();

  

    const logInUser = async () => {
      
      try {
        console.log(email, password);
        await httpClient.post("/login", {
          email,
          password,
        });
  
        window.location.href = "/Home";
      } catch (error) {
        if (error.response.status === 401) {
          alert("Invalid credentials");
        }
      }
    };
  



  return (
  

    
      <div className="signin">
        <h3>Get Started</h3>
        <p>Don't have an account ?
        <button onClick={()=>Navigate('/SignUp')} id="sign-up" >Sign Up</button></p>
        <Form className="sign">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" required />
  
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" required />
          </Form.Group>
          <button className="cssbuttons-io-button" type="button" onClick={() => logInUser()}>Submit
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              ></path>
            </svg>
          </div>
          </button>
        </Form>
        <div className="log"></div>
      </div>
    
   );
}

export default LoginPage;
