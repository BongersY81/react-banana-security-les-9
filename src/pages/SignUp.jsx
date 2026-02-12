import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

function SignUp() {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/users',
                {
                    username: username,
                    email: email,
                    password: password,

                },
                {
                    headers: {
                        'novi-education-project-id': 'cef3eb7c-19dd-4b51-b681-43e26cc8a99d',


                    }
                });
            console.log(response);

        } catch (e) {
            console.error(e);
        }

    }


    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="form-username">
                    <p>Gebruikersnaam</p>
                    <input
                        type="text"
                        id="form-username"
                        value={username}
                        placeholder="gebruikersnaam"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

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
                    Registreren
                </button>

            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;