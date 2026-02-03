import {createContext,useState} from 'react';
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();

    const login = () => {
         toggleIsAuth(true);
        console.log("je bent ingelogd");
        navigate('/profile')
    }

    const logout = () => {
        toggleIsAuth(true);
        console.log("Je bent uitgelogd")
        navigate("/")
    }

    const data = {
        isAuth: isAuth,
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