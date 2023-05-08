

export default function reducer (state, action) {
  state.vote = []
  switch (action.type) {
    case 'setCreds':
      state.creds = action.creds
      return state
      case 'vote':
        let vote = {}
        vote[action.vote[0][0]] = action.vote[0][1] // vote assembler
        let stateBuilder = state.vote
        stateBuilder.push(vote)
        state.vote = stateBuilder
    default:
      return state
  }
}