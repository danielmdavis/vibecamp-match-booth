

export default function reducer (state, action) {
  switch (action.type) {
    case 'setCreds':
      state.creds = action.creds
      console.log(state)
      return state
    default:
      return state
  }
}