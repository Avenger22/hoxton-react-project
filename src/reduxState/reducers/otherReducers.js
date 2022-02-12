const articles= []
const coaches= []

const initialState = {
    services: []
}

const serviceItem= {}
const teamItem = {}
const productItem = {}
const blogItem = {}
const footerPosts = []
const companyItem = {}
const companies = []
const initialRelatedItems = []
const formTouch = []
const categoryClicked = false


export function setArticlesReducer(state = articles, action) {

    switch(action.type) {

        case 'SET_ARTICLES': 
            return action.payload
        
        default: 
            return state

    }

}

export function setCoachesReducer(state = coaches, action) {

    switch(action.type) {

        case 'SET_COACHES': 
            return action.payload
        
        default: 
            return state

    }

}

export function setBlogItemReducer(state = blogItem, action) {

    switch(action.type) {

        case 'SET_BLOG_ITEM': 
            return action.payload
        
        default: 
            return state

    }

}


export function setServiceItemReducer(state = serviceItem, action) {

    switch(action.type) {

        case 'SET_SERVICE_ITEM': 
            return action.payload
        
        default: 
            return state

    }

}

export function setCompanyItemReducer(state = companyItem, action) {

    switch(action.type) {

        case 'SET_COMPANY_ITEM': 
            return action.payload
        
        default: 
            return state

    }

}

export function setTeamItemReducer(state = teamItem, action) {

    switch(action.type) {

        case 'SET_TEAM_ITEM': 
            return action.payload
        
        default: 
            return state

    }

}


export function setCategoryClickedReducer(state = categoryClicked, action) {

    switch(action.type) {

        case 'SET_CATEGORY_CLICKED': 
            return action.payload
        
        default: 
            return state

    }

}

export function setFormTouchReducer(state = formTouch, action) {

    switch(action.type) {

        case 'SET_FORM_TOUCH': 
            return action.payload
        
        default: 
            return state

    }

}

export function setProductItemReducer(state = productItem, action) {

    switch(action.type) {

        case 'SET_PRODUCT_ITEM': 
            return action.payload
        
        default: 
            return state

    }

}

export function setInitialRelatedItemsReducer(state = initialRelatedItems, action) {

    switch(action.type) {

        case 'SET_INITIAL_RELATED_ITEMS': 
            return action.payload
        
        default: 
            return state

    }

}

export function setCompaniesReducer(state = companies, action) {

    switch(action.type) {

        case 'SET_COMPANIES': 
            return action.payload
        
        default: 
            return state

    }

}

export function setServicesReducer(state = initialState, action) {

    switch(action.type) {

        case 'SET_SERVICES': 
            return {...state, services: action.payload}
        
        default: 
            return state

    }

}

export function setFooterPostsReducer(state = footerPosts, action) {

    switch(action.type) {

        case 'SET_FOOTER_POSTS': 
            return action.payload
        
        default: 
            return state

    }

}