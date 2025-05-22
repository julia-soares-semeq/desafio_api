import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home"

const router = createBrowserRouter([
  {
    path: '/',
    element:<LoginForm />
  },
  {
    path: '/',
    element:<Home />
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
