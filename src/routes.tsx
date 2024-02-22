import { RouteObject } from "react-router-dom";
import Resume from "./components/resume/Index";
import MusicApp from "./components/projects/MusicApp/Index";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Resume />,
        children: [
        ],
    },
    {
        path: "/projects/music-app",
        element: <MusicApp />,
        children: [
        ],
    },
];

export default routes;
