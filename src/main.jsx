import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import { Cardapio } from './Pages/Cardapio';
import { Carrinho } from './Pages/Carrinho';
import { Home } from './Pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/carrinho",
        element: <Carrinho/>,
      },
      {
        path: "/cardapio",
        element: <Cardapio/>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
