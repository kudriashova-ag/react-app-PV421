import { createBrowserRouter } from "react-router";
import TodoList from "./components/ToDo/TodoList";
import First from "./components/First";
import App from "./App";
import Register from "./pages/Register";

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
            }
        ]
    },

]);

export default router;