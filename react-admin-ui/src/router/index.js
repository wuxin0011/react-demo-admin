import {Navigate, useRoutes} from "react-router-dom";
import Login from '../pages/login'
import {NotAuth, NotFound, NotLogin} from "../pages/error";
import MyLayout from "../layout";
import Dashboard from "../pages/dashboard";

export const routerList = [
    {
        path: '/login',
        element: <Login/>,
        meta: {
            title: 'login',
            hidden: false,
            icon: 'icon-login'
        }
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
        path: '/',
        element: <MyLayout/>,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard/>,
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/dashboard"/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]


export function RouteList() {
    return useRoutes(routerList)
}

