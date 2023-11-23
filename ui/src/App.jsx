import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/home";
import Footer from "./components/Footer";
import Gigs from "./pages/Gigs";

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };
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
        // {
        //   path: "/myGigs",
        //   element: <MyGigs />,
        // },
        // {
        //   path: "/orders",
        //   element: <Orders />,
        // },
        // {
        //   path: "/messages",
        //   element: <Messages />,
        // },
        // {
        //   path: "/message/:id",
        //   element: <Message />,
        // },
        // {
        //   path: "/add",
        //   element: <Add />,
        // },
        // {
        //   path: "/gig/:id",
        //   element: <Gig />,
        // },
      ],
    },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
