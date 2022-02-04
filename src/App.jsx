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
  const [initialItems, setInitialItems] = useState([])
  const [users, setUsers] = useState([])

  const [signInStatus, setSignInStatus] = useState(false)
  const [signInData, setSignInData] = useState([])
  const [signInUserName, setSignInUserName] = useState('')

  const [signUpStatus, setSignUpStatus] = useState(false)
  const [signUpData, setSignUpData] = useState([])

  const [paymentStatus, setPaymentStatus] = useState(false)
  const [paymentData, setPaymentData] = useState([])

  const [favoriteClickSpan, setFavoriteClickSpan] = useState(0)
  const [bagClickSpan, setBagClickSpan] = useState(0)

  const [userCatcher, setUserCatcher] = useState([])
  const [userName, setUserName] = useState('')
  
  const [selectType, setSelectType] = useState('Default')
  const [category, setCategory] = useState('Default')
  const [searchTerm, setSearchTerm] = useState('')
  
  const [searchOnCategory, setSearchOnCategory] = useState('Default')
  const [selectedModal, setSelectedModal] = useState('')
  // #endregion

  // #region 'Server Functions'
  function getItemsFromServer() {

    fetch('http://localhost:8000/items')
      .then(resp => resp.json())
      .then(itemsFromServer1 => {
      setItems(itemsFromServer1)
    })

  }

  function getInitialItemsFromServer() {

    fetch('http://localhost:8000/items')
        .then(resp => resp.json())
        .then(itemsFromServer2 => {
        setInitialItems(itemsFromServer2)
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
  useEffect(getInitialItemsFromServer, [])
  useEffect(getItemsFromServer, [])
  // #endregion

  const navigate = useNavigate()
  
  // #region 'Bag and Favorite adding and removing functions'
  function handleButtonAddBasket(product) {
    
    if (signInStatus === true) {

      let itemsCopy = JSON.parse(JSON.stringify(items))
      const index = itemsCopy.findIndex(target => target.id === product.id)

      const item = itemsCopy[index]
      // console.log("Item", item)

      if (item.stock > 0) {

        const newItem = {
            ...item,
            quantity: item.quantity ? item.quantity + 1 : 1,
            stock: item.stock - 1
        }

        // console.log("NewItem", newItem)
        itemsCopy[index] = newItem

        // console.log("Items Copy", itemsCopy)

        setBagClickSpan(bagClickSpan + 1)
        setItems(itemsCopy)

        navigate('/bag')

      }

      else {
        alert('You cannot add an item in the bag with no stock')
      }

    }

    else {
      alert('You need to be signed in to add to bag')
    }

  }

  function handleButtonRemoveBasket(product) {
    
    let itemsCopy = JSON.parse(JSON.stringify(items));
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    setBagClickSpan(bagClickSpan - item.quantity)

    const newItem = {
      ...item,
      quantity: 0,
      stock: item.stock + 1
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

    setFavoriteClickSpan(favoriteClickSpan - 1)
    setItems(itemsCopy)

    // updatedFavorite = updatedFavorite.filter(item => item.id !== product.id)
    // setPosts(updatedPosts);

  }

  function handleButtonAddFavorite(product) {
    
    if (signInStatus === true) {

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

          setFavoriteClickSpan(favoriteClickSpan + 1)
          setItems(itemsCopy)

          navigate('/favorites')

        }

      else {
        alert("You cannot add this item to Wishlist when it is already there")
      }

    }

    else {
      alert('You need to be signed in to add to wishlist')
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

    setBagClickSpan(bagClickSpan + 1)
    setFavoriteClickSpan(favoriteClickSpan - 1)
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

            selectedModal = {selectedModal}
            searchTerm = {searchTerm}
            setSearchTerm = {setSearchTerm}
            searchOnCategory = {searchOnCategory}
            setSearchOnCategory = {setSearchOnCategory}
            userName = {userName}
            setUserName = {setUserName}
            userCatcher = {userCatcher}
            setUserCatcher = {setUserCatcher}
            setCategory = {setCategory}

            setBagClickSpan = {setBagClickSpan}
            bagClickSpan = {bagClickSpan}
            favoriteClickSpan = {favoriteClickSpan}
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

            setFavoriteClickSpan = {setFavoriteClickSpan}
            handleButtonRemoveFavorite = {handleButtonRemoveFavorite}
            handleButtonAddBagRemoveFavorite = {handleButtonAddBagRemoveFavorite}

            bagClickSpan = {bagClickSpan}
            favoriteClickSpan = {favoriteClickSpan}
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
            
            setBagClickSpan = {setBagClickSpan}
            setFavoriteClickSpan = {setFavoriteClickSpan}
            bagClickSpan = {bagClickSpan}
            favoriteClickSpan = {favoriteClickSpan}

            handleButtonAddBasket = {handleButtonAddBasket}
            handleButtonAddFavorite = {handleButtonAddFavorite}

            selectType = {selectType}
            setSelectType = {setSelectType}
            category = {category}
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

            items = {items}
            setItems = {setItems}
            initialItems = {initialItems}
            setInitalItems = {setInitialItems}
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

            bagClickSpan = {bagClickSpan}
            favoriteClickSpan = {favoriteClickSpan}
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