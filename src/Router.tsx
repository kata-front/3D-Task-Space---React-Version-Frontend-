import { createBrowserRouter } from "react-router";
import App from "./App";
import { Scene } from "./app/components/main/scene";
import { ActivePlanetProvider } from "./utils/hooks/useActiveTaskId";
import InfoPage from "./app/components/infoPage/infoPage";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/solarSystem',
        element: <ActivePlanetProvider>
            <Scene />
        </ActivePlanetProvider>
    },
    {
        path: '/infoTasks',
        element: <InfoPage />
    }
])