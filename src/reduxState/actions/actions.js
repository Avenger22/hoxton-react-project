// #region 'General State Actions'
export const handleOnSubmitForm = (formValue) => {

    return {
        type: 'HANDLE_ON_FORM_SUBMIT_FORM',
        payload: formValue
    }

}

export const handleOnChangeSearchSelect = (e) => {

    return {
        type: 'HANDLE_ON_CHANGE_SEARCH_SELECT',
        payload: e
    }
    
}

export const handleOnChangeSearchTerm = (e) => {

    return {
        type: 'HANDLE_ON_CHANGE_SEARCH_TERM',
        payload: e
    }
    
}

export const handleOnClickCategory = (liValue) => {

    return {
        type: 'HANDLE_ON_CLICK_CATEGORY',
        payload: liValue
    }
    
}

export const handleOnChangeSelect = (e) => {

    return {
        type: 'HANDLE_ON_CHANGE_SEARCH_SELECT',
        payload: e
    }
    
}

export const handleOffersEvent = () => {

    return {
        type: 'HANDLE_OFFERS_EVENT'
    }
    
}

export const handleFormNewsletter = (e) => {

    return {
        type: 'HANDLE_FORM_NEWS_LETTER',
        payload: e
    }
    
}

export const loginSignInStatus = () => {

    return {
        type: 'LOGIN_SIGN_IN_STATUS'
    }
    
}

export const logoutSignInStatus = () => {

    return {
        type: 'LOGOUT_SIGN_IN_STATUS'
    }
    
}

export const setInitialItems = (array) => {

    return {
        type: 'SET_INITIAL_ITEMS',
        payload: array
    }
    
}

export const setUsers = (array) => {

    return {
        type: 'SET_USERS',
        payload: array
    }
    
}

export const setItems = (array) => {

    return {
        type: 'SET_ITEMS',
        payload: array
    }
    
}

export const increaseBagClickSpan = () => {

    return {
        type: 'INCREASE_BAG_CLICK_SPAN'
    }
    
}

export const decreaseBagClickSpan = () => {

    return {
        type: 'DECREASE_BAG_CLICK_SPAN'
    }
    
}

export const increaseFavoriteClickSpan = () => {

    return {
        type: 'INCREASE_FAVORITE_CLICK_SPAN',
    }
    
}

export const decreaseFavoriteClickSpan = () => {

    return {
        type: 'DECREASE_FAVORITE_CLICK_SPAN'
    }
    
}
// #endregion

// #region 'Contact Us Actions'
export const handleTextAreaChange = (e) => {

    return {
        type: 'HANDLE_TEXT_AREA_CHANGE',
        payload: e
    }
    
}

export const handleNameChange = (e) => {

    return {
        type: 'HANDLE_NAME_CHANGE',
        payload: e
    }
    
}

export const handleEmailChange = (e) => {

    return {
        type: 'HANDLE_EMAIL_CHANGE',
        payload: e
    }
    
}

export const handleSubjectChange = (e) => {

    return {
        type: 'HANDLE_SUBJECT_CHANGE',
        payload: e
    }
    
}

export const handlePhoneChange = (e) => {

    return {
        type: 'HANDLE_PHONE_CHANGE',
        payload: e
    }
    
}

export const setContactSubmit = (newArray) => {

    return {
        type: 'SET_CONTACT_SUBMIT',
        payload: newArray
    }
    
}
// #endregion

// #region 'Sign-in Actions'
export const setUserNameSignIn = (e) => {

    return {
        type: 'SET_USER_NAME_SIGN_IN',
        payload: e
    }
    
}

export const setSignInUserName = (e) => {

    return {
        type: 'SET_SIGN_IN_USER_NAME',
        payload: e
    }
    
}

export const handlePasswordChangeSignIn = (e) => {
    
    return {
        type: 'HANDLE_PASSWORD_CHANGE_SIGN_IN',
        payload: e
    }

}
// #endregion

// #region 'Sign UP actions'
export const handleEmailChangeSignUp = (e) => {

    return {
        type: 'HANDLE_EMAIL_CHANGE_SIGN_UP',
        payload: e
    }
    
}

export const handlePasswordChangeSignUp = (e) => {

    return {
        type: 'HANDLE_PASSWORD_CHANGE_SIGN_UP',
        payload: e
    }
    
}

export const handleUserNameChangeSignUp = (e) => {

    return {
        type: 'HANDLE_USER_NAME_CHANGE_SIGN_UP',
        payload: e
    }
    
}

export const handleFullNameChangeSignUp = (e) => {

    return {
        type: 'HANDLE_FULL_NAME_CHANGE_SIGN_UP',
        payload: e
    }
    
}

export const setSignUpStatus = () => {

    return {
        type: 'SET_SIGN_UP_STATUS'
    }
    
}
// #endregion

// #region 'Payment actions'
export const handleEmailChangePayment = (e) => {

    return {
        type: 'HANDLE_EMAIL_CHANGE_PAYMENT',
        payload: e
    }
    
}

export const handleZipCodeChangePayment = (e) => {

    return {
        type: 'HANDLE_ZIP_CODE_CHANGE_PAYMENT',
        payload: e
    }
    
}

export const handleAddressChangePayment = (e) => {

    return {
        type: 'HANDLE_ADDRESS_CHANGE_PAYMENT',
        payload: e
    }
    
}

export const  handleFullNameChangePayment = (e) => {

    return {
        type: 'HANDLE_FULL_NAME_CHANGE_PAYMENT',
        payload: e
    }
    
}

export const setPaymentData = (newArray) => {

    return {
        type: 'SET_PAYMENT_DATA',
        payload: newArray
    }
    
}

export const setPaymentStatus= () => {

    return {
        type: 'SET_PAYMENT_STATUS'
    }
    
}
// #endregion

// #region 'Other actionc'
export const setArticles= (array) => {

    return {
        type: 'SET_ARTICLES',
        payload: array
    }
    
}

export const setCoaches= (array) => {

    return {
        type: 'SET_COACHES',
        payload: array
    }
    
}

export const setServices= servicesFromServer => {

    return {

        type: 'SET_SERVICES',
        payload:  servicesFromServer

    }
    
}

export const setTeamItem= (object) => {

    return {
        type: 'SET_TEAM_ITEM',
        payload: object
    }
    
}

export const setBlogItem= (object) => {

    return {
        type: 'SET_BLOG_ITEM',
        payload: object
    }
    
}

export const setServiceItem= (object) => {

    return {
        type: 'SET_SERVICE_ITEM',
        payload: object
    }
    
}

export const setCompanyItem= (object) => {

    return {
        type: 'SET_COMPANY_ITEM',
        payload: object
    }
    
}

export const setCompanies= (array) => {

    return {
        type: 'SET_COMPANIES',
        payload: array
    }
    
}

export const setPostsFooter= (array) => {

    return {
        type: 'SET_POSTS_FOOTER',
        payload: array
    }
    
}

export const setFormTouch= (array) => {

    return {
        type: 'SET_FORM_TOUCH',
        payload: array
    }
    
}

export const setCategoryClicked= () => {

    return {
        type: 'SET_CATEGORY_CLICKED'
    }
    
}

export const setInitialRelatedItems = (array) => {

    return {
        type: 'SET_INITIAL_RELATED_ITEMS',
        payload: array
    }
    
}

export const setProductItem= (object) => {

    return {
        type: 'SET_PRODUCT_ITEM',
        payload: object
    }
    
}
// #endregion