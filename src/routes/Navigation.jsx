import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetail from "../pages/ItemDetail";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <ItemListContainer/>
    },
    {
        path: "item/:ide",
        element: <ItemDetail/>
    },
    {
        path: "category/:ide",
        element: <ItemListContainer/>
    }
])

const Navigation = () => {
    return (
        <RouterProvider router={routes}/>
    )
}
export default Navigation