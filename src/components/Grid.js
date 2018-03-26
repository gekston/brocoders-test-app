import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridRow from './GridRow'

class Grid extends Component {
  state = {
    tableHovered: null,
    btnPosition: {},
    removeBtnHovered: null,
    rowIndex: null,
    cellIndex: null
  }

  addRow (e) {
    this.props.incrementRow(this.props.row.length + 1)
  }
  addCell (e) {
    this.props.incrementCell(this.props.cell.length + 1)
  }
  deleteRow (e) {
    this.props.decrementRow(this.state.rowIndex)
  }
  deleteCell (e) {
    this.props.decrementCell(this.state.cellIndex)
  }
  render() {
    const { row, cell } = this.props
    let rmBtnPosition = {
      row: {
        display: this.state.tableHovered || this.state.removeBtnHovered ? 'block' : 'none',
        left:  this.state.btnPosition.x + 'px'
      },
      cell: {
        display: this.state.tableHovered || this.state.removeBtnHovered ? 'block' : 'none',
        top:  this.state.btnPosition.y + 'px'
      }
    }
    const rows = row.map((index) =>
      <GridRow
        key={index}
        cell={cell}
        btnPosition={this.calculatePosition}
        indexElement={this.indextd} />
    )
    return (
      <section>
        <div className="container">
          <table
            className="container__table"
            onMouseEnter={this.mouseHandlerEnter}
            onMouseLeave={this.mouseHandlerLeave}
          >
            <tbody>
              {rows}
            </tbody>
          </table>
          <button
            className="btn__add btn__add-row"
            onClick={this.addCell.bind(this)}
          >+</button>
        </div>
          <button
            className="btn__add btn__add-col"
            onClick={this.addRow.bind(this)}
          >+</button>
          <button
            className="btn__rm btn__rm-row"
            onClick={this.deleteRow.bind(this)}
            disabled={row.length <= 1 ? true : false}
            onMouseOver={this.RemoveBtnEnter}
            onMouseLeave={this.RemoveBtnLeave}
            style={(this.state.tableHovered) || (this.state.removeBtnHovered) ? rmBtnPosition.row : {}}
          >-</button>
          <button
            className="btn__rm btn__rm-col"
            onClick={this.deleteCell.bind(this)}
            disabled={cell.length <= 1 ? true : false}
            onMouseOver={this.RemoveBtnEnter}
            onMouseLeave={this.RemoveBtnLeave}
            style={(this.state.tableHovered) || (this.state.removeBtnHovered) ? rmBtnPosition.cell : {}}
          >-</button>
      </section>
    )
  }
  indextd = (e) => {
    this.setState({
      rowIndex: e.target.parentNode.rowIndex,
      cellIndex: e.target.cellIndex
    })
  }
  RemoveCell = () => {}
  RemoveBtnEnter = () => this.setState({ removeBtnHovered: true })
  RemoveBtnLeave = () => this.setState({ removeBtnHovered: false })
  mouseHandlerEnter = () => this.setState({ tableHovered: true })
  mouseHandlerLeave = () => this.setState({ tableHovered: false })
  calculatePosition = (e) => {
    const hoveredElement = e.target
    const elementRect = hoveredElement.getBoundingClientRect()
    this.setState({
      btnPosition: { x: elementRect.x, y: elementRect.y }
    })
  }
}

Grid.propTypes = {
  row: PropTypes.array.isRequired,
  cell: PropTypes.array.isRequired,
  incrementCell: PropTypes.func.isRequired,
  incrementRow: PropTypes.func.isRequired,
  decrementRow: PropTypes.func.isRequired,
  decrementCell: PropTypes.func.isRequired
}

export default Grid
