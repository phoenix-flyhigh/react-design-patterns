import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { User } from "./pages/types";

export const AuthContext = createContext<{ user: User | null, setUser: Dispatch<SetStateAction<User | null>> }>({ user: null, setUser: () => { } });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => useContext(AuthContext);