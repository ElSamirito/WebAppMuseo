import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Sections from './Sections';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index:true, element: <Home/>},
      {path:"sections",element: <Sections/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
