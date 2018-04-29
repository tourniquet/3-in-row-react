import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CELL':
      return Object.assign({}, state, {
        firstCell: action.firstCell
      })
    case 'REPLACE_TILES': {
      return Object.assign({}, state, {
        board: [...action.board],
        firstCell: {
          id: null,
          value: null
        },
        secondCell: {
          id: null,
          value: null
        }
      })
    }
    default:
      return state
  }
}

export default reducer
