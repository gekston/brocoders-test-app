import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../components/Grid'
import * as addCell from '../actions/IncrementCell'
import * as addRow from '../actions/IncrementRow'
import * as rmCell from '../actions/DecrementCell'
import * as rmRow from '../actions/DecrementRow'
import './App.css'

class App extends Component {
  render() {
    const { row } = this.props.row
    const { cell } = this.props.cell
    const { INCREMENT_CELL } = this.props.addCell
    const { INCREMENT_ROW } = this.props.addRow
    const { DECREMENT_CELL } = this.props.rmCell
    const { DECREMENT_ROW } = this.props.rmRow
    return (
      <Grid
        row={row}
        cell={cell}
        incrementRow={INCREMENT_ROW}
        incrementCell={INCREMENT_CELL}
        decrementRow={DECREMENT_ROW}
        decrementCell={DECREMENT_CELL}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    row: state.row,
    cell: state.cell
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCell: bindActionCreators(addCell, dispatch),
    addRow: bindActionCreators(addRow, dispatch),
    rmCell: bindActionCreators(rmCell, dispatch),
    rmRow: bindActionCreators(rmRow, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
