export type MTPlanet = {
    id: number,
    name: string,
    texture: string,
    radius: number,
    distance: number
    speedDelay: number
}

export type MTTask = {
    id: number,
    title: string,
    completed: boolean
}

export type CreateTaskRequest = {
    title: string
}

export type RegisterRequest = {
    name: string,
    email: string,
    password: string
}

export type LoginRequest = {
    email: string,
    password: string
}

export type AuthResponse = string