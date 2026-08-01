import { createBrowserRouter } from "react-router";
import App from "./App";
import { Scene } from "./app/components/main/scene";
import { ActivePlanetProvider } from "./utils/hooks/useActiveTaskId";
import InfoPage from "./app/components/infoPage/infoPage";
import ModalComponent from "./app/components/auth/modal";
import RegisterComponent from "./app/components/auth/registerForm.tsx/register";
import LoginComponent from "./app/components/auth/login/login";

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
    },
    {
        path: '/register',
        element: <ModalComponent>
            <RegisterComponent />
        </ModalComponent>
    },
    {
        path: '/login',
        element: <ModalComponent>
            <LoginComponent />
        </ModalComponent>
    }
])