import { createHashRouter } from "react-router-dom";
import withNavBar from "./components/Navbar";
import Home from "./pages/Home";

export default createHashRouter([
    {
        path: '/',
        element: withNavBar(Home)
    },
])