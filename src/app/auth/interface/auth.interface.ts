import { User } from "src/app/helpers/interfaces/user.interface";

export interface Authorization {
    username: string,
    password: string,
    rememberUser?: boolean
}
export interface AuthResponse extends User{
    token: string
}