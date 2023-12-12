import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home,About ,Contact,User,Github,githubLoader} from './components'

//1st way 
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
    
//   }
// ])

//2nd way 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App/>} >
        <Route path ="/" element ={<Home/>}></Route>
      <Route path = "about" element ={<About/>}></Route>
      <Route path ="contact" element ={<Contact/>}></Route>
    
      <Route path ="User/:userid" element ={<User/>}></Route>

       <Route 
       loader ={githubLoader}
       path ="github"
        element ={<Github/>
        }></Route> 
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
