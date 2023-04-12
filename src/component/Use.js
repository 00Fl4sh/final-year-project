import React, { useState } from 'react';

function Signup() {
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    setUser({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    // TODO: Submit the form data to the server
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <div className="profile-card">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        {/* TODO: Add more profile information */}
      </div>
    </div>
  );
}

export default Signup;
