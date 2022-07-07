import {Navigate, useRoutes} from "react-router-dom";
import Login from '../pages/login'
import {NotAuth, NotFound, NotLogin} from "../pages/error";
import MyLayout from "../layout";
import Dashboard from "../pages/dashboard";
import Forget from "../pages/login/forget";
import Register from "../pages/login/register";

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
        path: '/forget',
        element: <Forget/>,
        meta: {
            title: '忘记密码',
            hidden: false,
            icon: 'icon-login'
        }
    },

    {
        path: '/register',
        element: <Register/>,
        meta: {
            title: '注册',
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

