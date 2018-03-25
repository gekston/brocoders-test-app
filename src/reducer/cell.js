const initialState = {
  cell: 4
}

export default function cell(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_CELL':
      return {
        ...state,
        cell: state.cell + action.payload
      }
    case 'DECREMENT_CELL':
      return {
        ...state,
        cell: state.cell - action.payload
      }
    default:
      return state
  }
}
