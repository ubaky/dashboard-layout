import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Page/Dashboard/Dashboard";
import DashboardHome from "../../Page/Dashboard-home/DashboardHome";
import Notifications from "../../Page/Notifications/Notifications";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "dashboard",
                element: <DashboardHome></DashboardHome>,
            },
            {
                path:'notifications',
                element:<Notifications></Notifications>
            }
        ],
    },
]);
