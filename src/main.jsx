import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import root from './Layout/root';
import Home from './pages/home/Home';
import ErrorPage from './pages/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: root,
    children:[
      {index:true, Component:Home},
      {path:'*', Component: ErrorPage},
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
