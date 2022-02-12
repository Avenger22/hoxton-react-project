let userNameSignUp= ''
let fullNameSignUp= ''
let passwordSignUp= ''
let emailSignUp= ''
let signUpStatus = false

export function handleEmailChangeSignUpReducer(state = userNameSignUp, action) {

    switch(action.type) {

        case 'HANDLE_EMAIL_CHANGE_SIGN_UP': 
            return action.payload
        
        default: 
            return state

    }

}

export function handlePasswordChangeSignUpReducer(state = passwordSignUp, action) {

    switch(action.type) {

        case 'HANDLE_PASSWORD_CHANGE_SIGN_UP': 
            return action.payload
        
        default: 
            return state

    }

}

export function handleUserNameChangeSignUpReducer (state = userNameSignUp, action) {

    switch(action.type) {

        case 'HANDLE_USER_NAME_CHANGE_SIGN_UP': 
            return action.payload
        
        default: 
            return state

    }

}


export function setSignUpStatusReducer (state = signUpStatus, action) {

    switch(action.type) {

        case 'SET_SIGN_UP_CHANGE_SIGN_UP': 
            return !state
        
        default: 
            return state

    }

}