import React, { useState } from "react";
import "./form.css";

function Form() {
  // State to store input values
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("User:", user);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info.</p>
        <button className="sign-in-button">SIGN IN</button>
      </div>

      <div className="right-panel">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="sign-up-button" type="submit">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
