import { createBrowserRouter } from "react-router";
import TodoList from "./components/ToDo/TodoList";
import First from "./components/First";
import App from "./App";
import Register from "./pages/Register";
import Users from "./pages/Users";
import { getUser, getUsers } from "./loaders/usersLoaders";
import User from "./pages/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/todo",
                element: <TodoList />
            },
            {
                path: "/first",
                element: <First />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/users",
                loader: getUsers,
                element: <Users />,
                children: [
                    {
                        path: ":id",
                        loader: getUser,
                        element: <User />
                    }
                ]
            },
           
           
           /* якщо потрібна окрема сторінка {
                path: "/users/:id",
                loader: getUser,
                element: <User />
            }, */
        ]
    },

]);

export default router;