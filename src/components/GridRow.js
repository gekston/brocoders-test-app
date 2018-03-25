import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GridRow extends Component {
  render() {
    const { cell, btnPosition, indexElement } = this.props
    const cells = cell.map(index => 
      <td
        key={index}
        onMouseOver={indexElement}
      ></td>
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
  btnPosition: PropTypes.func.isRequired,
  indexElement: PropTypes.func.isRequired
}
