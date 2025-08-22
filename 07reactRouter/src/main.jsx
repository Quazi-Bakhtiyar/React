import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import {Home} from './components'
import {About} from './components'
import { Contact } from './components'
import {User} from './components'
import {Github} from './components'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout /> ,
//     children:[
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// another way to create react router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout />}>
      <Route path = "" element = {<Home />}/>
      <Route path = "about" element = {<About />}/>
      <Route path = "contact" element = {<Contact />}/>
      <Route path = "github" element = {<Github />}/>
      <Route path = "user/:userId" element = {<User />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
