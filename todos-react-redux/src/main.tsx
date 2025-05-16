import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './HomePage.tsx'
import TodosPage from './TodosPage.tsx'
import AboutPage from './AboutPage.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/about/:name",
        Component: AboutPage,
      },
      {
        path: "/todos",
        Component: TodosPage,
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
