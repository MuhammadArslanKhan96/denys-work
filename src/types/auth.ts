import { User } from "firebase/auth"

export type LoginProps = {
    email: string,
    password: string
}

export type SignUpProps = {
    username: string,
    email: string,
    password: string,
    image?: string,
}

export type AuthContext = {
    login: (props: LoginProps) => void,
    isAuthenticated: boolean,
    user: User | null

}