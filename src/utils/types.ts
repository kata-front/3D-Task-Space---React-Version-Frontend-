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