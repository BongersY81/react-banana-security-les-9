import {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending'
    });

    useEffect(() => {
        const jwtToken = localStorage.getItem('token');
        if (jwtToken) {
            const decoded = jwtDecoded(jwtToken);
            console.log(decoded);

            if (isTokenValid(decoded)) {
                toggleAuth({
                    isAuth: true
                    status: 'done',
                    user: {
                        email: decoded.email,
                        roles: decoded.roles
                    }
                })
            } else {
                toggleAuth({
                    ...auth,
                    status: 'done',
                })
            }
        } else {
            toggleAuth({
                ...auth,
                status: 'done',

            })
        }


    }, [])


    const navigate = useNavigate();


    const login = (userDetails) => {
        localStorage.setItem('token', userDetails.token);
        console.log(userDetails);
        console.log("gebruiker is ingelogd");
        toggleAuth({
            isAuth: true,
            status: 'done',
            user: userDetails.user
        })
        navigate('/profile')
    }

    const logout = () => {
        localStorage.removeItem('token')
        console.log("gebruiker is uitgelogd")
        toggleAuth({
            isAuth: false,
            user: null,
        })
        navigate("/")
    }

    const data = {
        isAuth: auth.isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider