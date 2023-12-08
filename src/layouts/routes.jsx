import { createBrowserRouter } from "react-router-dom";
import Home from "../components/web/home/Home";
import Layout from "./layout";
import Categories from "../components/web/categories/Categories";
import DashboardLayout from './DashboardLayout.jsx';
import HomeDashboard from '../components/dashboard/home/Home.jsx';
import CategoriesDashboard from '../components/dashboard/categories/Categories.jsx';
import Register from "../components/web/register/Register.jsx";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
            path: 'register',
            element:<Register />
        },
        {
          path: 'home',
          element: <Home/>
        },
        {
          path: 'categories',
          element: <Categories/>
        },
        {
            path:'*',
            element:<h2>page not found --- web</h2>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children:[ 
        {
        path: 'home',
        element: <HomeDashboard />
      },
      {
        path: 'categories',
        element: <CategoriesDashboard />
      },
      {
        path:'*',
        element:<h2>page not found --- dashboard</h2>
    }
     
    ]
    }
  ]);