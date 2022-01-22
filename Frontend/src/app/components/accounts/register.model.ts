// "id", "username", "email", "codigo", "password"
export interface User {
    id?: string
    username: string
    email: string
    codigo: string
    password: string
}

export interface RegisterResponseModel {
    user: User
    token: string
}