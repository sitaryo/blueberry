import Home from "../components/Home";
import NewsContent from "../components/NewsContent";
import Admin from "../components/Admin";
import News from "../components/News";
import TodoList from "../components/TodoList";
import Father from "../components/Father-Son/Father";
import AdminInfo from "../components/Home/AdminInfo";
import AdminList from "../components/Home/AdminList";

const routes = [
    {
        path: "/",
        component: Home,
        exact:true
    },
    {
        path: "/news",
        component: News,
    },
    {
        path: "/content",
        component: NewsContent
    },
    {
        path: "/father",
        component: Father
    },
    {
        path: "/todoList",
        component: TodoList
    },
    {
        path: "/admin",
        component: Admin,
        routes:[
            {
                path: "/",
                component: AdminInfo,
                exact:true
            },
            {
                path: "/adminList",
                component: AdminList
            }
        ]
    },
];

export default routes;
