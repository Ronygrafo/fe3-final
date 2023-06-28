export const dentistsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTISTS':
      return { ...state, dentistsList: action.payload }
    case 'GET_DENTIST':
      return { ...state, dentist: action.payload }
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

export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return { ...state, theme: newTheme }
    default:
      return state
  }
}
