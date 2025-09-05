import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import History from './components/History/History.jsx'
import Balance from './components/Balance/Balance.jsx'
import Account from './components/Account/Account.jsx'
import Profile from './components/Profile/Profile.jsx'
const router=createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/balance",
        element: <Balance />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
