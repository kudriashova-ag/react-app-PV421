import { createBrowserRouter } from "react-router";
import TodoList from "./components/ToDo/TodoList";
import First from "./components/First";
import App from "./App";

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
            }
        ]
    },

]);

export default router;