import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { QueryClient, QueryClientProvider } from "react-query"
import {ReactQueryDevtools } from "react-query/devtools"
import { HelmetProvider } from "react-helmet-async"
import Loading from "./components/Loading.jsx"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Suspense fallback={<Loading />} />
        <App />
      </HelmetProvider>
      <ReactQueryDevtools position="bottom-right"/>
    </QueryClientProvider>
  </React.StrictMode>
)
