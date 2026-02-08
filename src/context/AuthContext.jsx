import {createContext,useState} from 'react';
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
    });

    const navigate = useNavigate();

    const login = () => {
        console.log("je bent ingelogd");
        toggleAuth({
            isAuth: true,
            user: ""
            })
        navigate('/profile')
    }

    const logout = () => {
        console.log("Je bent uitgelogd")
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