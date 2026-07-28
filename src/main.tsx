import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Router } from "./Router.tsx";
import "./app/styles/index.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store.ts";

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>,
);
