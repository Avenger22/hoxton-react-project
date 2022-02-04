// #region 'Importing'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'

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
// #endregion

// #region 'App'
function App() {

  // #region 'State Object'
  const [items, setItems] = useState([])
  const [users, setUsers] = useState([])

  const [signInStatus, setSignInStatus] = useState(false)
  const [signInData, setSignInData] = useState([])
  const [signInUserName, setSignInUserName] = useState('')

  const [signUpStatus, setSignUpStatus] = useState(false)
  const [signUpData, setSignUpData] = useState([])

  const [paymentStatus, setPaymentStatus] = useState(false)
  const [paymentData, setPaymentData] = useState([])
  // #endregion

  // #region 'Server Functions'
  function getItemsFromServer() {

    fetch('http://localhost:8000/items')
      .then(resp => resp.json())
      .then(itemsFromServer1 => {
      setItems(itemsFromServer1)
    })

  }

  function getUsersFromServer() {

    fetch('http://localhost:8000/users')
        .then(resp => resp.json())
        .then(usersFromServer => {
        setUsers(usersFromServer)
    })

  }

  useEffect(getUsersFromServer, [])
  useEffect(getItemsFromServer, [])
  // #endregion

  const navigate = useNavigate()
  
  // #region 'Bag and Favorite adding and removing functions'
  function handleButtonAddBasket(product) {
    
    let itemsCopy = JSON.parse(JSON.stringify(items))
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]
    // console.log("Item", item)

    const newItem = {
        ...item,
        quantity: item.quantity ? item.quantity + 1 : 1
    }

    // console.log("NewItem", newItem)
    itemsCopy[index] = newItem

    // console.log("Items Copy", itemsCopy)

    setItems(itemsCopy)
    navigate('/bag')

  }

  function handleButtonRemoveBasket(product) {
    
    let itemsCopy = JSON.parse(JSON.stringify(items));
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    const newItem = {
      ...item,
      quantity: 0
    }

    itemsCopy[index] = newItem
    setItems(itemsCopy)

  }

  function handleButtonRemoveFavorite(product) {
    
    let itemsCopy = JSON.parse(JSON.stringify(items));
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    const newItem = {
      ...item,
      favorite: false
    }

    itemsCopy[index] = newItem
    setItems(itemsCopy)

    // updatedFavorite = updatedFavorite.filter(item => item.id !== product.id)
    // setPosts(updatedPosts);

  }

  function handleButtonAddFavorite(product) {
    
      let itemsCopy = JSON.parse(JSON.stringify(items))
      const index = itemsCopy.findIndex(target => target.id === product.id)

      const item = itemsCopy[index]
      // console.log("Item", item)

      if (item.favorite === false) {
        
        const newItem = {
            ...item,
            favorite: !item.favorite
        }

        // console.log("NewItem", newItem)
        itemsCopy[index] = newItem

        // console.log("Items Copy", itemsCopy)

        setItems(itemsCopy)
        navigate('/favorites')

      }

    else {
      alert("You cannot add this item to Wishlist when it is already there")
    }

  }

  function handleButtonAddBagRemoveFavorite(product) {

    let itemsCopy = JSON.parse(JSON.stringify(items))
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]
    // console.log("Item", item)

    const newItem = {
        ...item,
        quantity: item.quantity ? item.quantity + 1 : 1,
        favorite: false
    }

    // console.log("NewItem", newItem)
    itemsCopy[index] = newItem

    // console.log("Items Copy", itemsCopy)

    setItems(itemsCopy)
    // navigate('/bag')

  }
  // #endregion

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

            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}

            handleButtonRemoveBasket = {handleButtonRemoveBasket}
          />}>
        </Route>

        <Route 
          path = "/favorites" 
          element = {<FavoritesPage 
            items = {items}
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}

            handleButtonRemoveFavorite = {handleButtonRemoveFavorite}
            handleButtonAddBagRemoveFavorite = {handleButtonAddBagRemoveFavorite}
          />}>
        </Route>

        <Route 
          path = "/contact" 
          element = {<ContactPage
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName} 
          />}>
        </Route>


        <Route 
          path = "/blog" 
          element = {<BlogPage 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
          />}>
        </Route>

        <Route 
          path = "/blog/:id" 
          element = {<BlogItemPage 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
          />}>
        </Route>


        <Route 
          path = "/about-us" 
          element = {<AboutUsPage 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
          />}>
        </Route>


        <Route 
          path = "/products" 
          element = {<ProductsPage 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
            
            handleButtonAddBasket = {handleButtonAddBasket}
            handleButtonAddFavorite = {handleButtonAddFavorite}
          />}>
        </Route>

        <Route 
          path = "/products/:id" 
          element = {<ProductItemPage 
            items = {items}
            setItems = {setItems}

            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}

            handleButtonAddBasket = {handleButtonAddBasket}
            handleButtonAddFavorite = {handleButtonAddFavorite}
          />}>
        </Route>


        <Route 
          path = "/services" 
          element = {<ServicesPage 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
          />}>
        </Route>

        <Route 
          path = "/services/:id" 
          element = {<ServiceItemPage 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
          />}>
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

            users = {users}
            setUsers={setUsers}
          />}>
        </Route>

        <Route 
          path = "/sign-up" 
          element = {<SignUpPage 
            signUpData = {signUpData}
            setSignUpData = {setSignUpData}

            setSignUpStatus = {setSignUpStatus}
            signUpStatus = {signUpStatus}

            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}

            users={users}
            setUsers={setUsers}
          />}>
        </Route>

        <Route 
          path = "/payment" 
          element = {<PaymentPage 
            paymentData = {paymentData}
            setPaymentData = {setPaymentData}
            setPaymentStatus = {setPaymentStatus}
            paymentStatus = {paymentStatus}

            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
          />}>
        </Route>


        <Route 
          path = "/teams" 
          element = {<TeamsPage 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
          />}>
        </Route>

        <Route 
          path = "/teams/:id" 
          element = {<TeamItemPage 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
          />}>
        </Route>


        <Route 
          path = "*" 
          element = {<Error404Page 
            signInStatus={signInStatus}
            setSignInStatus={setSignInStatus}
            signInUserName={signInUserName}
          />}>
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