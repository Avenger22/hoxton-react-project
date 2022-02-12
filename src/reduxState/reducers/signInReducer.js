let passwordSignIn= ''
let userNameSignIn= ''
let signInUserName = ''

export function userNameSignInReducer(state = userNameSignIn, action) {

    switch(action.type) {

        case 'SET_USER_NAME_SIGN_IN': 
            return action.payload
        
        default: 
            return state

    }

}

export function signInUserNameReducer(state = signInUserName, action) {

    switch(action.type) {

        case 'SET_USER_NAME_SIGN_IN': 
            return action.payload
        
        default: 
            return state

    }

}

export function passwordSignInReducer(state = passwordSignIn, action) {

    switch(action.type) {

        case 'HANDLE_PASSWORD_CHANGE_SIGN_IN': 
            return action.payload
        
        default: 
            return state

    }

}