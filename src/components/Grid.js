import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridRow from './GridRow'

class Grid extends Component {
  state = {
    tableHovered: null,
    btnPosition: {},
    removeBtnHovered: null
  }
  render() {
    const {
      row, cell, incrementCell, incrementRow, decrementRow, decrementCell
    } = this.props
    const rowArr = []
    const cellArr = []
    for(let x = 0; x < row; x++) {
      rowArr.push(x)
    }
    for(let x = 0; x < cell; x++) {
      cellArr.push(x)
    }
    let rmBtnPosition = {
      row: {
        display: this.state.tableHovered || this.state.removeBtnHovered ? 'block' : 'none',
        transform: 'translateY(' + this.state.btnPosition.y + 'px)'
      },
      cell: {
        display: this.state.tableHovered || this.state.removeBtnHovered ? 'block' : 'none',
        transform: 'translateX(' + this.state.btnPosition.x + 'px)'
      }
    }
    const rows = rowArr.map((index) =>
      <GridRow
        key={index}
        cell={cellArr}
        btnPosition={this.calculatePosition} />
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
            onClick={incrementRow}
          >+</button>
        </div>
          <button
            className="btn__add btn__add-col"
            onClick={incrementCell}
          >+</button>
          <button
            className="btn__rm btn__rm-row"
            onClick={decrementRow}
            disabled={rowArr.length <= 1 ? true : false}
            onMouseEnter={this.RemoveBtnEnter}
            onMouseLeave={this.RemoveBtnLeave}
            style={(this.state.tableHovered) || (this.state.removeBtnHovered) ? rmBtnPosition.row : {}}
          >-</button>
          <button
            className="btn__rm btn__rm-col"
            onClick={decrementCell}
            disabled={cellArr.length <= 1 ? true : false}
            onMouseEnter={this.RemoveBtnEnter}
            onMouseLeave={this.RemoveBtnLeave}
            style={(this.state.tableHovered) || (this.state.removeBtnHovered) ? rmBtnPosition.cell : {}}
          >-</button>
      </section>
    )
  }
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
  row: PropTypes.number.isRequired,
  cell: PropTypes.number.isRequired,
  incrementCell: PropTypes.func.isRequired,
  incrementRow: PropTypes.func.isRequired,
  decrementRow: PropTypes.func.isRequired,
  decrementCell: PropTypes.func.isRequired
}

export default Grid
