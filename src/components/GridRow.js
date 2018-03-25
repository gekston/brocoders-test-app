import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GridRow extends Component {
  render() {
    const { cell, btnPosition } = this.props
    const cells = cell.map(index => 
      <td key={index}></td>
    )
    return(
      <tr
        onMouseEnter={btnPosition}
      >{cells}</tr>
    )
  }
}

GridRow.propTypes = {
  cell: PropTypes.array.isRequired,
  btnPosition: PropTypes.func.isRequired
}
