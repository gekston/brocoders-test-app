import returnArray from '../helpers/return_array'

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
        rowArray: returnArray(action.payload)
      }
    case 'DECREMENT_ROW':
    const spliceRowArray = state.rowArray.splice(action.payload, 1)
      return {
        ...state,
        rowArray: state.rowArray
      }
    default:
      return state
    }
}
