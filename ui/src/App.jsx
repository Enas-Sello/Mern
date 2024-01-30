import "./App.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import NavBar from "./components/NavBar"

import Home from "./pages/Home"
import Footer from "./components/Footer"
import Gigs from "./pages/Gigs"
import MyGigs from "./pages/MyGigs"
import NewGig from "./pages/NewGig"
import Message from "./pages/Message"
import Messages from "./pages/Messages"
import Gig from "./pages/Gig"
import Orders from "./pages/Orders"
import Register from "./pages/Register"
import Login from "./pages/Login"


const App = () => {
  
  const data = {
    user: JSON.parse(localStorage.getItem("currentUser")),
    logo: "market",
  }


  const Layout = () => {
    return (
      <div className="app">
        <NavBar data={data} />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders user={data.user} />,
        },
        {
          path: "/messages",
          element: <Messages user={data.user} />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <NewGig />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
