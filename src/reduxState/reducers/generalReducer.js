let items = []
let initialItems = []
let users=  []
let newsLetterEmail= ''
  
let signInStatus= false

let favoriteClickSpan= 0
let bagClickSpan= 0

let selectType= 'Default'
let category= 'Default'
let searchTerm= ''
let searchOnCategory= 'Default'

export function itemsReducer(state = items, action) {

    switch(action.type) {

        case 'SET_ITEMS': 
            return action.payload
        
        default: 
            return state

    }

}

export function usersReducer(state = users, action) {

    switch(action.type) {
        case 'SET_USERS': 
            return action.payload

        default: 
            return state

    }
    
}

export function initialItemsReducer(state = initialItems, action) {

    switch(action.type) {
        
        case 'SET_INITIAL_ITEMS': 
            return action.payload

        default: 
            return state

    }
    
}

export function bagClickSpanReducer(state = bagClickSpan, action) {

    switch(action.type) {

        case 'INCREASE_BAG_CLICK_SPAN': 
            return state + 1

        case 'DECREASE_BAG_CLICK_SPAN': 
            return state - 1
        
        case 'RESET_BAG_CLICK_SPAN': 
            return state - state
    
        default: 
            return state

    }
    
}

export function favoriteClickSpanReducer(state = favoriteClickSpan, action) {

    switch(action.type) {

        case 'INCREASE_FAVORITE_CLICK_SPAN': 
            return state + 1

        case 'DECREASE_FAVORITE_CLICK_SPAN': 
            return state - 1

        case 'RESET_FAVORITE_CLICK_SPAN': 
            return state - state

        default: 
            return state

    }
    
}

export function signInStatusReducer(state = signInStatus, action) {

    switch(action.type) {

        case 'LOGIN_SIGN_IN_STATUS': 
            return true

        case 'LOGOUT_SIGN_IN_STATUS': 
            return false

        default: 
            return state

    }

}

export function categoryReducer(state = category, action) {

    switch(action.type) {

        case 'HANDLE_ON_CLICK_CATEGORY': 
            return action.payload
        
        case 'HANDLE_OFFERS_EVENT':
            return action.payload

        default: 
            return state

    }

}

export function searchTermReducer(state = searchTerm, action) {

    switch(action.type) {

        case 'HANDLE_ON_CHANGE_SEARCH_TERM': 
            return action.payload

        default: 
            return state

    }

}

export function selectTypeReducer(state = selectType, action) {

    switch(action.type) {

        case 'HANDLE_ON_CHANGE_SEARCH_SELECT': 
            return action.payload

        default: 
            return state

    }

}

export function searchOnCategoryReducer(state = searchOnCategory, action) {

    switch(action.type) {

        case 'HANDLE_ON_CHANGE_SEARCH_SELECT': 
            return action.payload

        default: 
            return state

    }

}

export function newsLetterReducer(state = newsLetterEmail, action) {

    switch(action.type) {

        case 'HANDLE_FORM_NEWS_LETTER': 
            return action.payload

        default: 
            return state

    }

}