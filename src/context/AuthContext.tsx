import { Splash } from "@src/compoenents"
import { AuthContext, LoginProps } from "@src/types/auth"
import {
    User
} from "firebase/auth"
import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from "react"

const AuthContextProvider = createContext<AuthContext | null>(null)

function AuthProvider({ children }: { children: ReactNode }) {
    const [loading, setloading] = useState(false)
    const [user, setuser] = useState<User | null>(null)
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const login = useCallback(async ({ email, password }: LoginProps) => {
        try {
            // await signInWithEmailAndPassword(, email, password)
        } catch (error) {
            console.log("🚀 ~ file: AuthContext.tsx:12 ~ login ~ error:", error)
        }
    }, [])

    const value = useMemo(() => ({
        login,
        isAuthenticated,
        user,
    }), [
        login,
        isAuthenticated,
        user,
    ])

    return (
        <div>
            <AuthContextProvider.Provider value={value}>
                {loading ? <Splash /> : children}
            </AuthContextProvider.Provider>

        </div>
    )
}
export { AuthContextProvider, AuthProvider }