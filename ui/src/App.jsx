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

// import { useQuery } from "react-query"
// import axios from "axios"
// import Loading from "./components/Loading"

const App = () => {
  // const { isLoading, error, Gigs } = useQuery("data", () =>
  //   axios
  //     .get("http://localhost:8800/api/gig/allGigs", {
  //       withCredentials: true,
  //     })
  //     .then(() => {
  //       // Handle the response
  //     })
  //     .catch((error) => {
  //       console.log("error msg", error.message)
  //     })
  // )
  // if (isLoading) return <Loading />
  // if (error) return "An error has occurred: " + error.message
  
  const data = {
    user: {
      _id: "6570d1d968285ea7e821ebc8",
      username: "enasSeller",
      email: "enasSeller@gmail.com",
      isSeller: true,
      createdAt: "2023-12-06T19:56:09.525Z",
      updatedAt: "2023-12-06T19:56:09.525Z",
    },
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
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
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
