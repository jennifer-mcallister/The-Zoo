import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import { AnimalView } from './pages/AnimalView';
import {animalLoader } from './loaders/animalLoader';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: animalLoader,
  },
  {
    path: "/:id",
    element: <AnimalView></AnimalView>,
    loader: animalLoader,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

