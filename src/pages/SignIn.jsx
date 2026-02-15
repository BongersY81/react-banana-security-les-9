import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useState} from "react";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login',
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        'novi-education-project-id': 'cef3eb7c-19dd-4b51-b681-43e26cc8a99d',
                    }
                });
            console.log(response);
            login(response.data);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="form-email">
                    <p>Emailadres</p>
                    <input
                        type="text"
                        id="form-email"
                        value={email}
                        placeholder="emailadres"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="form-password">
                    <p>Wachtwoord</p>
                    <input
                        type="text"
                        id="form-password"
                        value={password}
                        placeholder="wachtwoord"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <button type="submit">
                    Inloggen
                </button>

            </form>
            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;