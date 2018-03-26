import returnArray from '../helpers/ReturnArrayItems'
import deleteItemFromArray from '../helpers/DeleteItemFromArray'

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
        cellArray: state.cellArray.concat(action.payload)
      }
    case 'DECREMENT_CELL':
      return {
        ...state,
        cellArray: deleteItemFromArray(state.cellArray, action.payload)
      }
    default:
      return state
  }
}
