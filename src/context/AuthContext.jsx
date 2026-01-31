import {createContext,useState} from "react";


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const data = {
        auth: isAuth,
        toggleIsAuth: toggleIsAuth,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}




export default AuthContextProvider