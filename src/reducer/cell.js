import returnArray from '../helpers/return_array'

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
    const spliceCellArray = state.cellArray.splice(action.payload, 1)
      return {
        ...state,
        cellArray: state.cellArray
      }
    default:
      return state
  }
}
