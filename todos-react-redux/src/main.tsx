import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './HomePage.tsx'
import TodosPage from './TodosPage.tsx'
import AboutPage from './AboutPage.tsx'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { countReducer, todosReducer } from './store/slices.ts'

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

const store = configureStore({
  reducer: {
    count: countReducer,
    todos: todosReducer,
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
