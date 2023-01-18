import React, { useState } from 'react';
//import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://localhost:3000/users";

export const Register = (props) => {
    //const navigate = useNavigate();

   // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const registerData = {
            //name: name,
            email: email,
            password: pass
        };

         axios
      .post(baseUrl, registerData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        alert("error in registering");
      }); 

    console.log(registerData);

    //setName("");
    setEmail("");
    setPass("");

    //navigate("/login");
  };


    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                {/* <label htmlFor="name">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Full Name" id="name" name="Full Name" /> */}
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
             <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already Registered User?</button>
        </div>
    );
}