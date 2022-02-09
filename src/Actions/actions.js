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