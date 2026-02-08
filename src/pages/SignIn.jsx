import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext);

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login',
                {
                    email: 'regular.user@example.com',
                    password: 'regular123',
                },
                {
                    headers: {
                            'novi-ecucation-project-id':  'cef3eb7c-19dd-4b51-b681-43e26cc8a99d',
                    }
                });
                console.log(response);
        } catch (e) {
                console.error(e);
            }
            // login()
        }

        return (
            <>
                <h1>Inloggen</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                    molestias qui quo unde?</p>

                <form onSubmit={handleSubmit}>
                    <p>*invoervelden*</p>
                    <button type="submit">
                        Inloggen
                    </button>
                </form>

                <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
            </>
        );
    }

    export default SignIn;