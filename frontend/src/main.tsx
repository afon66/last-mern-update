import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import "./reset.css"
import "antd/dist/reset.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { Auth } from "./pages/auth"
import { Posts } from "./pages/posts"
import { AntdLayout as Layout } from "./components/layout"
import { CurrentPost } from "./pages/current-post"
import { UserProfile } from "./pages/user-profile"
import { Followers } from "./pages/followers"
import { Following } from "./pages/following"
import { AuthGuard } from "./features/user/authGuard"
import { ToastContainer } from "react-toastify"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <CurrentPost />,
      },
      {
        path: "users/:id",
        element: <UserProfile />,
      },
      {
        path: "followers",
        element: <Followers />,
      },
      {
        path: "following",
        element: <Following />,
      },
    ],
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <AuthGuard>
            <RouterProvider router={router} />
          </AuthGuard>
          <ToastContainer />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
