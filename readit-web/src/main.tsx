import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { mainRoutes } from './routes/main-routes.tsx';
import { RouterProvider } from 'react-router/dom';


const rootElement = document.getElementById("root");

if(!rootElement){
  throw new Error("Root Element couldn't be find")
} 

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={mainRoutes} />
  </StrictMode>
)
