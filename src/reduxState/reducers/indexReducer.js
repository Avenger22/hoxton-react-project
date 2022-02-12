// #region 'Importing Reducers'
import { combineReducers } from "redux";

import {
    textAreaContactReducer, nameConactReducer, emailContactReducer,
    subjectContactReducer, phoneContactReducer, formContactReducer
} from "./contactReducer"

import {
    itemsReducer, initialItemsReducer, usersReducer,
    categoryReducer, selectTypeReducer, bagClickSpanReducer, favoriteClickSpanReducer,
    searchOnCategoryReducer, searchTermReducer, signInStatusReducer, newsLetterReducer
} from './generalReducer'

import {
    passwordSignInReducer, userNameSignInReducer, signInUserNameReducer
} from './signInReducer'

import {
    handlePasswordChangeSignUpReducer, handleEmailChangeSignUpReducer, 
    handleUserNameChangeSignUpReducer, setSignUpStatusReducer
} from './signUpReducer'

import {
    setPaymentStatusReducer, handleEmailChangePaymentReducer, 
    handleAddressChangePaymentReducer, handleZipCodeChangePaymentReducer, 
    handleFullNameChangePaymentReducer, setPaymentDataReducer
} from './paymentReducer'

import {
    setArticlesReducer, setBlogItemReducer, setCategoryClickedReducer, setCoachesReducer,
    setCompaniesReducer, setCompanyItemReducer, setFooterPostsReducer, setFormTouchReducer, setInitialRelatedItemsReducer,
    setProductItemReducer, setServiceItemReducer, setServicesReducer, setTeamItemReducer
} from './otherReducers'
// #endregion

const allReducers = combineReducers({

    textAreaContact: textAreaContactReducer,
    nameConact: nameConactReducer,
    emailContact: emailContactReducer,
    subjectContact: subjectContactReducer,
    phoneContact: phoneContactReducer,
    formContact: formContactReducer,
    
    items: itemsReducer,
    initialItems: initialItemsReducer,
    users: usersReducer,
    category: categoryReducer,
    selectType: selectTypeReducer,
    bagClickSpan: bagClickSpanReducer,
    favoriteClickSpan: favoriteClickSpanReducer,
    searchOnCategory: searchOnCategoryReducer,
    searchTerm: searchTermReducer,
    signInStatus: signInStatusReducer,
    newsLetter: newsLetterReducer,
    
    passwordSignIn: passwordSignInReducer,
    userNameSignIn: userNameSignInReducer,
    signInUserName: signInUserNameReducer,

    handleEmailChangeSignUp: handleEmailChangeSignUpReducer,
    handlePasswordChangeSignUp: handlePasswordChangeSignUpReducer,
    handleUserNameChangeSignUp: handleUserNameChangeSignUpReducer,
    setSignUpStatus: setSignUpStatusReducer,

    handleAddressChangePayment: handleAddressChangePaymentReducer,
    handleEmailChangePayment: handleEmailChangePaymentReducer,
    handleZipCodeChangePayment: handleZipCodeChangePaymentReducer,
    handleFullNameChangePayment: handleFullNameChangePaymentReducer,
    setPaymentStatus: setPaymentStatusReducer,
    setPaymentDataReducer: setPaymentDataReducer,

    setArticles: setArticlesReducer,
    setBlogItem: setBlogItemReducer,
    setServiceItem: setServiceItemReducer,
    setCoaches: setCoachesReducer,
    setCompanies: setCompaniesReducer,
    setCompanyItem: setCompanyItemReducer,
    setCategoryClicked: setCategoryClickedReducer,
    setFooterPosts: setFooterPostsReducer,
    setFormTouch: setFormTouchReducer,
    setInitialRelatedItems: setInitialRelatedItemsReducer,
    setServices: setServicesReducer,
    setTeamItem: setTeamItemReducer

})

export default allReducers