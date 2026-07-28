import type { MTPlanet, MTTask } from "./utils/types";

export const tasks_maket: MTTask[] = [
    {id: 1, title: "Меркурий", completed: false},
    {id: 2, title: "Венера", completed: false},
    {id: 3, title: "Земля", completed: false},
    {id: 4, title: "Марс", completed: false},
    {id: 5, title: "Юпитер", completed: false},
    {id: 6, title: "Сатурн", completed: false},
    {id: 7, title: "Уран", completed: false},
    {id: 8, title: "Нептун", completed: false},
];

export const planet_maket: MTPlanet[] =[
    {id: 1, name: "Меркурий", texture: "/textures/planets/planet-1.webp", radius: 0.3, distance: 2, speedDelay: 0.1},
    {id: 2, name: "Венера", texture: "/textures/planets/planet-2.webp", radius: 0.5, distance: 3, speedDelay: 0.1},
    {id: 3, name: "Земля", texture: "/textures/planets/planet-3.webp", radius: 0.3, distance: 4, speedDelay: 0.1},
    {id: 4, name: "Марс", texture: "/textures/planets/planet-4.webp", radius: 0.4, distance: 5, speedDelay: 0.1}
]