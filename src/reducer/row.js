const initialState = {
  row: 4
}

export default function row(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_ROW':
      return {
        ...state,
        row: state.row + action.payload
      }
    case 'DECREMENT_ROW':
      return {
        ...state,
        row: state.row - action.payload
      }
    default:
      return state
    }
}
