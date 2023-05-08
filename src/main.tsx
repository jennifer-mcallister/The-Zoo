import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import { AnimalView } from './pages/AnimalView';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/:id",
    element: <AnimalView></AnimalView>,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

