const initialState = {
  // Create an array with 3 different 'tiles'
  board: Array(16).fill().map(() => Math.floor(Math.random() * 3))
}

export default initialState
