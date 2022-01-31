// #region 'Importing'
import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css'

import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import BlogPage from './pages/Blog/BlogPage'
import ProductsPage from "./pages/Products/ProductsPage"
import BlogItemPage from './pages/BlogItem/BlogItemPage'
import Error404Page from './pages/Error404/Error404Page'
// #endregion

// #region 'App'
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
          element = {<HomePage />}>
        </Route>

        <Route 
          path = "/contact" 
          element = {<ContactPage />}>
        </Route>

        <Route 
          path = "/blog" 
          element = {<BlogPage />}>
        </Route>

        <Route 
          path = "/blog/:id" 
          element = {<BlogItemPage />}>
        </Route>

        <Route 
          path = "/products" 
          element = {<ProductsPage />}>
        </Route>

        <Route 
          path = "*" 
          element = {<Error404Page />}>
        </Route>
        
      </Routes>
      
      { 
        // #endregion 
      }

    </>

  )
  //#endregion

}
// #endregion

export default App