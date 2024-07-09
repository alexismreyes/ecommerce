export interface User{
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    created_at: Date,
    roles: string
}