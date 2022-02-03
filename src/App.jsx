// #region 'Importing'
import {Routes, Route, Navigate, useLocation} from 'react-router-dom'

import './App.css'

import HomePage from './Pages/Home/HomePage'
import ContactPage from './Pages/Contact/ContactPage'
import BlogPage from './Pages/Blog/BlogPage'
import ProductsPage from "./Pages/Products/ProductsPage"
import BlogItemPage from './Pages/BlogItem/BlogItemPage'
import Error404Page from './Pages/Error404/Error404Page'
import AboutUsPage from "./Pages/AboutUs/AboutUsPage"
import ServicesPage from './Pages/Servicess/ServicesPage'
import ServiceItemPage from "./Pages/ServiceItem/ServiceItemPage"
import TeamsPage from "./Pages/Teams/TeamsPage"
import TeamItemPage from "./Pages/TeamItem/TeamItemPage"
import ProductItemPage from './Pages/ProductItem/ProductItemPage'
import SignInPage from './Pages/SignIn/SignInPage'
import SignUpPage from './Pages/SignUp/SignUpPage'
import BagPage from './Pages/Bag/BagPage'
import FavoritesPage from './Pages/Favorites/FavoritesPage'
import PaymentPage from "./Pages/Payment/PaymentPage"
import { useEffect, useState } from 'react/cjs/react.development'
import HeaderCommon from './Components/Common/HeaderCommon/HeaderCommon'
import FooterCommon from './Components/Common/FooterCommon/FooterCommon'
import ButtonTop from './Components/Common/ButtonTop/ButtonTop'
import ProductsHeader from './Components/Products/Header/ProductsHeader/ProductsHeader'
import ProductsFooter from './Components/Products/Footer/ProductsFooter'
// #endregion

// #region 'App'
function App() {

  // #region 'State Object'
  const [items, setItems] = useState([])

  const [signInStatus, setSignInStatus] = useState(false)
  const [signInData, setSignInData] = useState([])
  const [signInUserName, setSignInUserName] = useState('')

  const [signUpStatus, setSignUpStatus] = useState(false)
  const [signUpData, setSignUpData] = useState([])

  const [paymentStatus, setPaymentStatus] = useState(false)
  const [paymentData, setPaymentData] = useState([])

  // #region 'STATE FOR PRODUCTS'
  const [userCatcher, setUserCatcher] = useState([])
  const [userName, setUserName] = useState('')

  const [category, setCategory] = useState('Default')
  const [searchTerm, setSearchTerm] = useState('')

  const [searchOnCategory, setSearchOnCategory] = useState('Default')
  const [selectedModal, setSelectedModal] = useState('')
  // #endregion

  // #endregion

  // #region 'Server Functions'
  function getItemsFromServer() {

    fetch('http://localhost:8000/items')
      .then(resp => resp.json())
      .then(itemsFromServer1 => {
      setItems(itemsFromServer1)
    })

  }

  useEffect(getItemsFromServer, [])
  // #endregion

  const sampleLocation = useLocation() //custom hook to get location of router URL

  // function randomInteger(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // const randomValue = randomInteger(1,30)

  // #region 'Return Html'
  return (

    <>

      { 
        //#region 'Conditional rendering' 
      }
  
      {

        sampleLocation.pathname === '/products'
        || sampleLocation.pathname === '/bag' 
        || sampleLocation.pathname === '/favorites'  ? (
          
          <ProductsHeader 
              selectedModal = {selectedModal}
              setSelectedModal = {setSelectedModal}

              searchTerm = {searchTerm}
              setSearchTerm = {setSearchTerm}

              searchOnCategory = {searchOnCategory}
              setSearchOnCategory = {setSearchOnCategory}

              userName = {userName}
              setUserName = {setUserName}

              userCatcher = {userCatcher}
              setUserCatcher = {setUserCatcher}
              setCategory = {setCategory}
              />

          ) : (

                <>

                  <HeaderCommon 
                    signInStatus={signInStatus}
                    signInUserName={signInUserName}
                    setSignInStatus={setSignInStatus}
                  />
          
                  <ButtonTop />

                </>

              )
      }
      
      { 
        // #endregion
      }

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
          element = {<HomePage 
            signInStatus = {signInStatus}
            setSignInStatus = {setSignInStatus}

            signInUserName = {signInUserName}
          />}>
        </Route>

        <Route 
          path = "/bag" 
          element = {<BagPage 
            items = {items}
            setItems = {setItems}
          />}>
        </Route>

        <Route 
          path = "/favorites" 
          element = {<FavoritesPage />}>
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
          path = "/favorites" 
          element = {<FavoritesPage 
            items = {items}
          />}>
        </Route>

        <Route 
          path = "/blog/:id" 
          element = {<BlogItemPage />}>
        </Route>


        <Route 
          path = "/about-us" 
          element = {<AboutUsPage />}>
        </Route>


        <Route 
          path = "/products" 
          element = {<ProductsPage 
            selectedModal = {selectedModal}
            setSelectedModal = {setSelectedModal}

            searchTerm = {searchTerm}
            setSearchTerm = {setSearchTerm}

            searchOnCategory = {searchOnCategory}
            setSearchOnCategory = {setSearchOnCategory}

            userName = {userName}
            setUserName = {setUserName}

            userCatcher = {userCatcher}
            setUserCatcher = {setUserCatcher}

            category={category}
            setCategory = {setCategory}
          />}>
        </Route>

        <Route 
          path = "/products/:id" 
          element = {<ProductItemPage 
            items = {items}
            setItems = {setItems}
          />}>
        </Route>


        <Route 
          path = "/services" 
          element = {<ServicesPage />}>
        </Route>

        <Route 
          path = "/services/:id" 
          element = {<ServiceItemPage />}>
        </Route>


        <Route 
          path = "/sign-in" 
          element = {<SignInPage 
            signInData = {signInData}
            setSignInData = {setSignInData}

            signInUserName = {signInUserName}
            setSignInUserName = {setSignInUserName}

            setSignInStatus = {setSignInStatus}
            signInStatus = {signInStatus}
          />}>
        </Route>

        <Route 
          path = "/sign-up" 
          element = {<SignUpPage 
            signUpData = {signUpData}
            setSignUpData = {setSignUpData}

            setSignUpStatus = {setSignUpStatus}
            signUpStatus = {signUpStatus}
          />}>
        </Route>

        <Route 
          path = "/payment" 
          element = {<PaymentPage 
            paymentData = {paymentData}
            setPaymentData = {setPaymentData}
            setPaymentStatus = {setPaymentStatus}
            paymentStatus = {paymentStatus}
          />}>
        </Route>


        <Route 
          path = "/teams" 
          element = {<TeamsPage />}>
        </Route>

        <Route 
          path = "/teams/:id" 
          element = {<TeamItemPage />}>
        </Route>


        <Route 
          path = "*" 
          element = {<Error404Page />}>
        </Route>
        
      </Routes>

      { 
        // #endregion 
      }

      { 
        //#region 'Conditional Rendering' 
      }

      {

        sampleLocation.pathname === '/products' 
        || sampleLocation.pathname === '/bag' 
        || sampleLocation.pathname === '/favorites'  ? (

          <ProductsFooter />
        ) : (

          <FooterCommon />

        )

      }

      { 
        // #endregion 
      }

    </>

  )
  //#endregion

}
// #endregion

export default App