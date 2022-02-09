import { combineReducers } from "redux";

import {
    textAreaContactReducer, nameConactReducer, emailContactReducer,
    subjectContactReducer, phoneContactReducer, formContactReducer
} from "../Reducers/contactReducer"

import {
    itemsReducer, initialItemsReducer, usersReducer,
    categoryReducer, selectTypeReducer, bagClickSpanReducer, favoriteClickSpanReducer,
    searchOnCategoryReducer, searchTermReducer, signInStatusReducer, newsLetterReducer
} from './generalReducer'

import {
    passwordSignInReducer, userNameSignInReducer, signInUserNameReducer
} from './signInReducer'

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
    signInUserName: signInUserNameReducer

})

export default allReducers