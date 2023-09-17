import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AllBreweries from './pages/AllBreweries'
import SinglepageBrewery from './pages/SingleBrewery'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import SearchPage from './pages/SearchPage'
import NoBreweriesFound from './pages/NoBreweriesFound'

const App = () => {

  const router =  createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <AllBreweries/>
        },
        {
          path: "singlebrewery/:breweryId",
          element: <SinglepageBrewery/>
        },
        {
          path: "search/:searchWord",
          element: <SearchPage/>
        },
        {
          path: "*",
          element: <ErrorPage/>
        },
        {
          path: "nofound",
          element: <NoBreweriesFound/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

//       <button onClick={fetchData}>Push this button</button>