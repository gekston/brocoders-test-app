import returnArray from '../helpers/ReturnArrayItems'

const initialState = {
  cell: 4,
  cellArray: []
}

initialState.cellArray = returnArray(initialState.cell)

export default function cell(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_CELL':
      return {
        ...state,
        cellArray: returnArray(action.payload)
      }
    case 'DECREMENT_CELL':
      return {
        ...state,
        cellArray: state.cellArray.filter(item => item !== action.payload)
      }
    default:
      return state
  }
}
