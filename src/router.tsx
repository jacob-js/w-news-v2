import { createHashRouter } from "react-router-dom";
import withNavBar from "./components/Navbar";
import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";
import PublisherArticles from "./pages/PublisherArticles";
import NotFound from "./pages/NotFound";

export default createHashRouter([
    {
        path: '/',
        element: withNavBar(Home)
    },
    {
        path: '/article',
        element: withNavBar(ArticleDetails)
    },
    {
        path: '/publisher/:id',
        element: withNavBar(PublisherArticles)
    },
    {
        path: '*',
        element: withNavBar(NotFound)
    }
])