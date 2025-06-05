import Logintemp from './Logintemp'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Logintemp />
    },
    {
      path: "/Browse",
      element: <Browse />
    },
  ])

  

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body