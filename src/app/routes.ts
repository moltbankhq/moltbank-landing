import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import LogoPage from "./pages/LogoPage";
import SocialImagePage from "./pages/SocialImagePage";
import { Root } from "./components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "logo", Component: LogoPage },
      { path: "social-image", Component: SocialImagePage },
    ],
  },
]);
