import {useNavigate} from 'react-router-dom'
import create from 'zustand'

export const useStore = create((set, get) => ({

  // #region 'GENERAL STATE

  // #region 'General state most important'
  items: [],
  initialItems: [],
  users: [],

  companies: [],
  newsLetterEmail: '',
  pageNumber: 0,
  itemsPerPage: 8,
  
  signInStatus: false,
  signInData: [],
  signInUserName: '',
  signUpStatus: false,
  signUpData: [],

  paymentStatus: false,
  paymentData: [],

  favoriteClickSpan: 0,
  bagClickSpan: 0,

  userCatcher: [],
  userName: '',

  selectType: 'Default',
  category: 'Default',
  searchTerm: '',
  searchOnCategory: 'Default',

  selectedModal: '',
  // #endregion

  // #region 'General Functions for state'
  handleButtonAddBasket: function(product) {

    const navigate = useNavigate()
    const { items, signInStatus, bagClickSpan } = get()

    if (signInStatus === true) {

      let itemsCopy = JSON.parse(JSON.stringify(get().items))
      const index = itemsCopy.findIndex(target => target.id === product.id)

      const item = itemsCopy[index]

      if (item.stock > 0) {

        const newItem = {
            ...item,
            quantity: item.quantity ? item.quantity + 1 : 1,
            stock: item.stock - 1
        }

        itemsCopy[index] = newItem

        set(bagClickSpan, bagClickSpan + 1 )
        set(items, itemsCopy)

        navigate('/bag')

      }

      else {
        alert('You cannot add an item in the bag with no stock')
      }

    }

    else {
      alert('You need to be signed in to add to bag')
    }

  },

  handleOnClickCategory : function (liValue) {
    
    const {category} = get()
    set(category, liValue)

  },

  handleChangingPageNumber : function (selected) {
    
    const {pageNumber} = get()
    set(pageNumber, selected)

  },

  handleOnChangeSelect : function(selectValue) {
    
    const {selectType} = get()
    set(selectType, selectValue)

  },

  handleOnChangeSelectPerPage : function(selectValue) {
    
    const {itemsPerPage} = get()
    set(itemsPerPage, parseInt(selectValue))
  
  },

  handleOffersEvent : function() {

    const {category} = get()
    set(category, 'offers')

  },

  handleSignInStatus : function() {

    const {signInStatus} = get()
    set(signInStatus, !signInStatus)
  
  },

  handleFormNewsletter : function (e) {

    const {newsLetterEmail} = get()
    
    const valueForm = e.target.newsLetter.value
    set(newsLetterEmail, valueForm)

  },

  setSignInStatus : function () {
    
    const {signInStatus} = get()
    set(signInStatus, !signInStatus)
  },

  bagItemsFiltered : function () {

    const {items} = get()
    return items.filter(item => item?.quantity > 0)
  
  },

  favoriteItemsFiltered : function () {

    const {items} = get()
    items.filter(item => item?.favorite === true)
  
  },

  handleButtonRemoveBasket : function (product) {
    
    const { items, bagClickSpan } = get()

    let itemsCopy = JSON.parse(JSON.stringify(items));
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    set(bagClickSpan, bagClickSpan - item.quantity)

    const newItem = {
      ...item,
      quantity: 0,
      stock: item.stock + 1
    }

    itemsCopy[index] = newItem

    set(items, itemsCopy)

  },

  handleButtonRemoveFavorite : function (product) {
    
    const { items, favoriteClickSpan } = get()

    let itemsCopy = JSON.parse(JSON.stringify(items));
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    const newItem = {
      ...item,
      favorite: false
    }

    itemsCopy[index] = newItem

    set(favoriteClickSpan, favoriteClickSpan - 1)
    set(items, itemsCopy)

  },

  handleButtonAddFavorite : function (product) {
    
    const navigate = useNavigate()
    const { signInStatus, items, favoriteClickSpan } = get()

    if (signInStatus === true) {

        let itemsCopy = JSON.parse(JSON.stringify(items))
        const index = itemsCopy.findIndex(target => target.id === product.id)

        const item = itemsCopy[index]

        if (item.favorite === false) {
          
          const newItem = {
              ...item,
              favorite: !item.favorite
          }

          itemsCopy[index] = newItem

          set(favoriteClickSpan, favoriteClickSpan + 1)
          set(items, itemsCopy)

          navigate('/favorites')

        }

      else {
        alert("You cannot add this item to Wishlist when it is already there")
      }

    }

    else {
      alert('You need to be signed in to add to wishlist')
    }

  },

  handleButtonAddBagRemoveFavorite : function (product) {

    const navigate = useNavigate()
    const {items, bagClickSpan, favoriteClickSpan} = get()

    let itemsCopy = JSON.parse(JSON.stringify(items))
    const index = itemsCopy.findIndex(target => target.id === product.id)

    const item = itemsCopy[index]

    const newItem = {
        ...item,
        quantity: item.quantity ? item.quantity + 1 : 1,
        favorite: false
    }

    itemsCopy[index] = newItem

    set(bagClickSpan, bagClickSpan + 1)
    set(favoriteClickSpan, favoriteClickSpan - 1)
    set(items, itemsCopy)

    navigate('/bag')

  },

  setUsers: function(array)  {

    const {users} = get()
    set(users, array)

  },

  setItems: function(array)  {

    const {items} = get()
    set(items, array)

  },

  setInitialItems: function(array)  {

    const {initialItems} = get()
    set(initialItems, array)

  },

  handleOnChangeBasketSelect : function (value, objectBasket) {
        
    const {items, bagClickSpan} = get()

    let productsCopy = JSON.parse(JSON.stringify(items))
    const index = productsCopy.findIndex(target => target.id === objectBasket.id)

    const item = productsCopy[index]

    if (parseInt(value) <= item.stock) {
        
        const newItem = { ...item, quantity: parseInt(value) }

        if (newItem.quantity === 0) {
            set(bagClickSpan, 0)
        }
        
        productsCopy[index] = newItem
        set(items, productsCopy)

      }

    else {

      alert("You cannot have more than the stock of the item")
      
      const newItem = { ...item, quantity: 1 }
      productsCopy[index] = newItem
      set(items, productsCopy)

    }

  },
  // #endregion

  // #endregion


  // #region 'CONTACT US STATE'

  // #region 'Contact Us page state'
  nameContactUs : '',
  emailContactUs : '',
  subjectContactUs: '',
  phoneContactUs: '',
  textAreaContactUs: '',
  formContactUs: [],
  // #endregion

  // #region 'Functions for Contact us State'
  handleTextAreaChange: function (e) {

    const {textArea} = get()
    set(textArea, e.target.value)

  },

  handleNameChange : function (e) {

    const {nameContactUs} = get()
    set(nameContactUs, e.target.value)

  },

  handleEmailChange : function (e) {

    const {emailContactUs} = get()
    set(emailContactUs, e.target.value)

  },

  handleSubjectChange : function (e) {

    const {subjectContactUs} = get()
    set(subjectContactUs, e.target.value)

  },

  handlePhoneChange : function (e) {

    const {phoneContactUs} = get()
    set(phoneContactUs, e.target.value)

  },

  handleContactSubmit : function(e) {

    const {phoneContactUs, emailContactUs, subjectContactUs, textAreaContactUs, nameContactUs, formContactUs} = get()
    
    const array = [
        {
            email: emailContactUs, 
            subject: subjectContactUs,
            textArea: textAreaContactUs,
            fullName: nameContactUs,
            phone: phoneContactUs
        }
    ]

    const newArray = [...formContactUs, array]

    e.target.reset()
    set(formContactUs, newArray)

  },
  // #endregion
  
  // #endregion


  // #region 'SIGN-IN STATE'

  // #region 'sign-in general state'
  passwordSignIn: '',
  userNameSignIn: '',
  // #endregion

  // #region 'sign-in general functions'
  getUser : function (userNameParam, passwordParam) {
    
    const {users} = get()
    return users.find(user => user.userName === userNameParam && user.password === passwordParam)
  
  },

  handleUserNameChangeSignIn : function (e) {

    const {userNameSignIn, signInUserName} = get()
    
    set(userNameSignIn, e.target.value)
    set(signInUserName, e.target.value)
    
  },

  handlePasswordChangeSignIn : function (e) {

    const {passwordSignIn} = get()
    set(passwordSignIn, e.target.value)

  },

  handleFormSubmitSignIn : function (e) {

    const navigate = useNavigate()
    const {getUser, signInStatus, signInUserName, userNameSignIn, passwordSignIn} = get()
    
    const gettingUser = getUser(userNameSignIn, passwordSignIn)

    if(gettingUser) {

      // update the server
      fetch(`http://localhost:8000/users/${gettingUser.id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ signedIn: true })
      })

      alert("Sign in succesfully !")

      set(signInStatus, true)
      set(signInUserName, gettingUser.userName)
      
      e.target.reset()
      navigate('/home')

    }

    else {
        alert("User is not registered, please try again")
    }

  },
  // #endregion

  // #endregion


  // #region 'SIGN-UP STATE'

  // #region 'sign-up general state'
  userNameSignUp: '',
  fullNameSignUp: '',
  passwordSignUp: '',
  emailSignUp: '',
  // #endregion

  // #region 'sign-up general functions'
  handleEmailChangeSignUp : function (e) {

    const {emailSignUp} = get()
    set(emailSignUp, e.target.value)

  },

  handlePasswordChangeSignUp : function (e) {

    const {passwordSignUp} = get()
    set(passwordSignUp, e.target.value)

  },

  handleUserNameChangeSignUp : function (e) {

    const {userNameSignUp} = get()
    set(userNameSignUp, e.target.value)

  },

  handleFullNameChangeSignUp : function (e) {

    const {fullNameSignUp} = get()
    set(fullNameSignUp, e.target.value)
    
  },

  handleFormSubmitSignUp : function (e) {

    const navigate = useNavigate()
    const {emailSignUp, passwordSignUp, 
      userNameSignUp, fullNameSignUp, users, signUpStatus} = get()
    
    const object = {
        email: emailSignUp, 
        password: passwordSignUp,
        userName: userNameSignUp,
        fullName: fullNameSignUp,
        signedIn: false
    }

    fetch(`http://localhost:8000/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
    .then(responseItem => responseItem.json())
    .then(responseJsonArray => {

      const updatedUsers = [...users, responseJsonArray]
      alert("User is registered successfully")
      
      set(users, updatedUsers)

    })


    set(signUpStatus, !signUpStatus)

    e.target.reset()
    navigate('/sign-in')

  },
  // #endregion

  // #endregion


  // #region 'PAYMENT STATE'

  // #region 'payment general state'
  addressPayment: '',
  fullNamePayment: '',
  zipCodePayment: '',
  emailPayment: '',
  // #endregion

  // #region 'payment general functions'
  handleEmailChangePayment : function (e) {

    const {emailPayment} = get()
    set(emailPayment, e.target.value)

  },

  handleZipCodeChangePayment : function (e) {

    const {zipCodePayment} = get()
    set(zipCodePayment, e.target.value)

  },

  handleAddressChangePayment : function (e) {

    const {addressPayment} = get()
    set(addressPayment, e.target.value)

  },

  handleFullNameChangePayment : function (e) {

    const {fullNamePayment} = get()
    set(fullNamePayment, e.target.value)
    
  },

  handleFormSubmitPayment : function (e) {

    const {emailPayment, addressPayment, zipCodePayment, fullNamePayment,
      paymentStatus, paymentData} = get()
    
    const array = [
      {
          email: emailPayment, 
          zipCode: zipCodePayment,
          address: addressPayment,
          fullName: fullNamePayment
      }
    ]

    const newArray = [...paymentData, array]

    set(paymentStatus, !paymentStatus)
    set(paymentData, newArray)

  },
  // #endregion

  // #endregion

  
  // #region 'BLOG STATE'

  // #region 'blog state general'
  articles: [],
  // #endregion

  // #region 'blog state functions'
  getArticlesFromServer : function () {

    const {articles} = get()

    fetch(`http://localhost:8000/articles`)
      .then(resp => resp.json())
      .then(coachesFromServer => set(articles, coachesFromServer))
    
  },
  // #endregion

  // #endregion


  // #region 'PRODUCT ITEM STATE'
  
  // #region 'product item functions'
  filterCategory : function (type, name) {

    const {initialRelatedItems} = get()
    return initialRelatedItems.filter(item => item.type === type && item.name !== name)
  
  },
  // #endregion

  // #endregion

}))