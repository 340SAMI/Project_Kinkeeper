import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import root from './Layout/root';
import Home from './pages/home/Home';
import ErrorPage from './pages/error/ErrorPage';
import FriendDetail from './pages/home/Components/FriendSection/FriendDetail';
import FriendParam from './context/FriendParam';

const router = createBrowserRouter([
  {
    path: "/",
    Component: root,
    children:[
      {index:true, Component:Home},
      {path:'*', Component: ErrorPage},
      {
        path: '/FriendDetail/:FriendId',
        loader: async ({ params }) => {
          const friendsDataPromise = await fetch('/friendsData.json');
          const friendsData = await friendsDataPromise.json();
          const Friend = friendsData.find((f) => f.id == params.FriendId);
          return Friend;
        },
        Component: FriendDetail,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(


<StrictMode>

      <FriendParam>
        <RouterProvider router={router} />
      </FriendParam>   

  </StrictMode>,
)
