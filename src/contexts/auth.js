import { createContext, useState } from "react";

const AuthContext = createContext({});

function AuthProvider(props) {

    const [user, setUser] = useState(
        {
            id_user: 1,
            name: "João Luís Rodrigues de Moura",
            email: "joao4633@gmail.com",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoxLCJpYXQiOjE3MzA5ODE3MDcsImV4cCI6MTczMTk4MTcwNn0.k-6LL6Po7_lRGETQuJouCoJALuIfKfEpUhQCWweBhvU"
        }
    );

    return <AuthContext.Provider value={{ user, setUser }}>
        {props.children}
    </AuthContext.Provider>
}

export { AuthContext, AuthProvider };