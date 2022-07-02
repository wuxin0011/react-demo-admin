import {Navigate, useRoutes} from "react-router-dom";
import Login from '../pages/login'
import {NotAuth, NotFound, NotLogin} from "../pages/error";

export default function RouteList() {
    return useRoutes([
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/',
                element: <Navigate to="/login"/>
            },
            {
                path: '/not-login',
                element: <NotLogin/>
            },
            {
                path: '/not-auth',
                element: <NotAuth/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    )
}

