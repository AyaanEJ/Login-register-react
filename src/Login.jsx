import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://localhost:3000/users/login";


export const Login = (props) => {
    /*const navigate = useNavigate();*/

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            email: email,
            password: pass,
        };

        console.log(loginData);


     axios
        .post(baseUrl, loginData)
        .then((response) => {
            const responseData = response.data;
            if (responseData.id !== 0) {
                alert("login success");
            } else {
                alert("login fails");
            }
        })
        .catch((err) => {
          console.log(err);
        });

      setEmail("");
      setPass("");
    };


    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register here</button>
        </div>
    );
};