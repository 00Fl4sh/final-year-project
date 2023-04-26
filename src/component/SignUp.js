import React ,{useState}from 'react'
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import httpClient from "../httpClient";
import { useNavigate } from "react-router-dom";



const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate=useNavigate();

  const registerUser = async () => {
    try {
      const resp = await httpClient.post("/register", {
        email,
        password,
      });
      console.log(resp.data);

      window.location.href = "/Home";
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  }

// function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   function handleSubmit(event) {
//     event.preventDefault();

//     fetch('/register', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         // Store the session ID in local storage or a cookie
//         localStorage.setItem('session_id', data.session_id);
        
//         // Redirect to the main page
//         window.location.href = '/Home';
//         console.log(data)
//       } else {
//         setError('Invalid email or password');
//       }
//     })
//     .catch(error => {
//       setError('An error occurred while logging in');
//     });
//   }

  return(

    
    <div className='signup'>
        <h3>Get Started</h3>
        <p>
        Already have an account ?
          <button onClick={()=>Navigate('/SignIn')}  id="signIn" >
            Sign In
          </button>
        </p>

        {/* <Form onSubmit={handleSubmit} */}
        <Form className='sign'>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your Name" required />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter email" required />
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" required />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Repeat your Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>



          {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}


          <button className="cssbuttons-io-button" type="button" onClick={() => registerUser()}>
          Submit
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
        <div className="logg"></div>
      </div>
    
)}
export default  SignupPage  ;