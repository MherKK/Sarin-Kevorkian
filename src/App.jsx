import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from "./sections/Home"
import Portfolio from "./sections/Portfolio"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
