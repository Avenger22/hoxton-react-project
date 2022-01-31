// #region 'Importing'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Blog from './Pages/Blog/Blog'
import Products from "./Pages/Products/Products"
import BlogItem from './Pages/BlogItem/BlogItem'
import Error404 from './Pages/Error404/Error404'
// #endregion

function App() {

  // #region 'Return Html'
  return (

    <>

      { 
        //#region 'Routes' 
      }
  
      <Routes>

        <Route 
          index 
          element={<Navigate replace to="/home" />} 
        />

        <Route 
          path = "/home" 
          element = {<Home />}>
        </Route>

        <Route 
          path = "/contact" 
          element = {<Contact />}>
        </Route>

        <Route 
          path = "/blog" 
          element = {<Blog />}>
        </Route>

        <Route 
          path = "/blog/:id" 
          element = {<BlogItem />}>
        </Route>

        <Route 
          path = "/products" 
          element = {<Products />}>
        </Route>

        <Route 
          path = "*" 
          element = {<Error404 />}>
        </Route>
        
      </Routes>
      
      { 
        // #endregion 
      }

    </>

  )
  //#endregion

}

export default App