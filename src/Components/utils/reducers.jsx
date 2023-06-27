export const dentistsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTISTS':
      return { dentistsList: action.payload, dentist: state.dentist }
    case 'GET_DENTIST':
      return { dentistsList: state.dentistsList, dentist: action.payload }
    default:
      throw new Error()
  }
}

export const favReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return [...state, action.payload]
    case 'DELETE_FAV':
      return state.filter(fav => fav.id !== action.payload)
    default:
      throw new Error()
  }
}
