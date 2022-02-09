let addressPayment= ''
let fullNamePayment= ''
let zipCodePayment= ''
let emailPayment= ''
let paymentStatus = false
let paymentData = []

export function handleEmailChangePaymentReducer(state = emailPayment, action) {

    switch(action.type) {

        case 'HANDLE_EMAIL_CHANGE_SIGN_UP': 
            return action.payload
        
        default: 
            return state

    }

}

export function handleZipCodeChangePaymentReducer(state = zipCodePayment, action) {

    switch(action.type) {

        case 'HANDLE_EMAIL_CHANGE_SIGN_UP': 
            return action.payload
        
        default: 
            return state

    }

}

export function handleAddressChangePaymentReducer(state = addressPayment, action) {

    switch(action.type) {

        case 'HANDLE_EMAIL_CHANGE_SIGN_UP': 
            return action.payload
        
        default: 
            return state

    }

}

export function handleFullNameChangePaymentReducer(state = fullNamePayment, action) {

    switch(action.type) {

        case 'HANDLE_EMAIL_CHANGE_SIGN_UP': 
            return action.payload
        
        default: 
            return state

    }

}

export function setPaymentDataReducer(state = paymentData, action) {

    switch(action.type) {

        case 'HANDLE_EMAIL_CHANGE_SIGN_UP': 
            return action.payload
        
        default: 
            return state

    }

}

export function setPaymentStatusReducer(state = paymentStatus, action) {

    switch(action.type) {

        case 'HANDLE_EMAIL_CHANGE_SIGN_UP': 
            return action.payload
        
        default: 
            return state

    }

}