import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import * as features from './features';
import * as pages from './pages';

export default function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          element: <features.UnProtectedRouteLayout />,
          children: [
            { path: "/signIn/*", element: <pages.SignIn /> },
            { path: "/signUp/*", element: <pages.SignUp /> },
            { path: "/", element: <pages.Main /> },
            { path: "/about", element: <pages.About /> },
            { path: "/shop", element: <pages.Shop /> },
            { path: "/cart", element: <pages.Cart /> },
            { path: "/shop/product/:productId", element: <pages.Product /> },
            { path: "*", element: <div style={{ background: "blue" }}>404</div> },
          ]
        },
        {
          element: <features.ProtectedRouteLayout />,
          children: [
            { path: "/afterSignIn", element: <div style={{ background: "red" }}>Protected Route</div> },
          ]
        },
      ]
    }
  ])

  return (
    <main className="App">
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </main>
  );
}
