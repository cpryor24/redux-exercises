/*
  Problem #2

  Export a reducer that will manages an array of groceries. It must expect the following action types:
    - ADD_CONTACT
    - FETCH_CONTACTS
    - REMOVE_CONTACT
*/

// Theoretically, these action type labels would be imported from an actions file, but we will define them here in this case.
let ADD_CONTACT = 'ADD_CONTACT'
let FETCH_CONTACTS = 'FETCH_CONTACTS'
let REMOVE_CONTACT = 'REMOVE_CONTACT'

// Write your code below this line!
let initialState = [
  {
    id: 1,
    fname: 'Joe'
  }
]

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      let user = {
        id: 3,
        fname: 'Jim'
      }
      return [...state, user]

    case FETCH_CONTACTS:
      return action.payload

    case REMOVE_CONTACT:
      let theId = action.payload
      return state.filter(contact => contact.id !== Number(theId))

    default:
      return state;
  }
}
