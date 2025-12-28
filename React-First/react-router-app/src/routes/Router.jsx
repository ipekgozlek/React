import {useRoutes, Navigate} from "react-router";
import HomeView from "../views/HomeView.jsx";
import ParametreView from "../views/ParametreView.jsx";
import userRouter from "./UserRouter.jsx";
import NewView from "../views/NewView.jsx";
import EconomiNewViews from "../views/EconomiNewViews.jsx";     
import SportNewView from "../views/SportNewView.jsx";

const Router=()=>{
    const routes = useRoutes([
        {
          path: "/", element: <HomeView />},
        {
          path: "/parametre/:id", 
          element: <ParametreView />},
          userRouter,
        {
           path:"/haberler/",
           element:<NewView />,
           children:[
            {index:true,element:<Navigate to="ekonomi"/>},
            // navigate ile varsayılan sayfa ataması yapıldı
                {
                    path:"ekonomi", 
                    element:<EconomiNewViews/>,
                },
                 {
                    path:"spor", 
                    element:<SportNewView/>,
                },
            ],
        },
    ]);
    return routes;
};
export default Router;