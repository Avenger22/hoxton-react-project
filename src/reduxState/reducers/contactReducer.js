let nameContact = ''
let emailContact = ''
let subjectContact= ''
let phoneContact= ''
let textAreaContact= ''
let formContact= []

export function textAreaContactReducer(state = textAreaContact, action) {

    switch(action.type) {

        case 'HANDLE_TEXT_AREA_CHANGE': 
            return action.payload
        
        default: 
            return state

    }

}

export function nameConactReducer(state = nameContact, action) {

    switch(action.type) {

        case 'HANDLE_NAME_CHANGE': 
            return action.payload
        
        default: 
            return state

    }

}

export function emailContactReducer(state = emailContact, action) {

    switch(action.type) {

        case 'HANDLE_EMAIL_CHANGE': 
            return action.payload
        
        default: 
            return state

    }

}

export function subjectContactReducer(state = subjectContact, action) {

    switch(action.type) {

        case 'HANDLE_SUBJECT_CHANGE': 
            return action.payload
        
        default: 
            return state

    }

}

export function phoneContactReducer(state = phoneContact, action) {

    switch(action.type) {

        case 'HANDLE_PHONE_CHANGE': 
            return action.payload
        
        default: 
            return state

    }

}

export function formContactReducer(state = formContact, action) {

    switch(action.type) {

        case 'HANDLE_TEXT_AREA_CHANGE': 
            return action.payload
        
        default: 
            return state

    }

}