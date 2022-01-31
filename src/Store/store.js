import create from 'zustand'

import initialEmails from './data/emails'

const getEmails = async () => initialEmails

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

const getSearchedEmails = (emails, search) =>
  emails.filter(email =>
    email.title.toLowerCase().includes(searchTermtoLowerCase())
  )

//   const state = {

//     //two important arrays for fetching and updating the state
//     items: [],
//     users: [],
//     initialItems: [],

//     //additional array for items in the bag
//     bagItems: [],
//     bagItemQuantity: [],

//     //super crucial for catching each name and passing it in render in else if, problem is because the filter function had param and passing was hard so this solved
//     userCatcher: [],

//     //checking to show the username after login USER SPAN
//     userName: null,
//     userShowClass: null,

//     //here checking to show the span in the page BAG SPAN
//     stockSpanValue: null,
//     stockShowClass: null,

//     selectedModal: '',
//     popUpShowed: false,

//     selectedPage: 'mainMenu',

//     selectType: 'Default',

//     totalAmount: 0,

//     //selected category
//     category: 'Default',

//     //searched item
//     search: '',

//     // searched item based on category
//     searchOnCategory: 'Default',

//     //experimental for pagination from js not server
//     page: 1,
//     perPage: 10

// }

export const useStore = create((set, get) => ({

  emails: initialEmails,
  hideRead: false,
  search: '',
  currentTab: 'inbox',
  updateSearch: newSearch => set({ search: newSearch }),
  updateTab: newTab => set({ currentTab: newTab }),
  toggleHideRead: () => set({ hideRead: !get().hideRead }),
  
  toggleRead: targetEmail => {
    const emailsCopy = JSON.parse(JSON.stringify(get().emails))
    const match = emailsCopy.find(email => email.id === targetEmail.id)
    match.read = !match.read
    set({ emails: emailsCopy })
  },

  toggleStar: targetEmail => {
    const emailsCopy = JSON.parse(JSON.stringify(get().emails))
    const match = emailsCopy.find(email => email.id === targetEmail.id)
    match.starred = !match.starred
    set({ emails: emailsCopy })
  },

  getFilteredEmails: () => {
    const { emails, hideRead, currentTab, search } = get()

    let filteredEmails = emails

    if (hideRead) filteredEmails = getReadEmails(filteredEmails)

    if (currentTab === 'starred')
      filteredEmails = getStarredEmails(filteredEmails)

    if (search !== '')
      filteredEmails = getSearchedEmails(filteredEmails, search)

    return filteredEmails
  }

}))