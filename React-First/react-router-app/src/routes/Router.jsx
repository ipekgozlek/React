import {useRoutes} from "react-router";
import HomeView from "../views/HomeView.jsx";
import ParametreView from "../views/ParametreView.jsx";
import userRouter from "./UserRouter.jsx";
const Router=()=>{
    const routes = useRoutes([
        {path: "/", element: <HomeView />},
        {path: "/parametre/:id", element: <ParametreView />},
        userRouter,
    ]);
    return routes;
}
export default Router;