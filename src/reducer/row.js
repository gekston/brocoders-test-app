import returnArray from '../helpers/ReturnArrayItems'
import deleteItemFromArray from '../helpers/DeleteItemFromArray'

const initialState = {
  row: 4,
  rowArray: []
}

initialState.rowArray = returnArray(initialState.row)

export default function row(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_ROW':
      return {
        ...state,
        rowArray: state.rowArray.concat(action.payload)
      }
    case 'DECREMENT_ROW':
      return {
        ...state,
        rowArray: deleteItemFromArray(state.rowArray, action.payload)
      }
    default:
      return state
    }
}
