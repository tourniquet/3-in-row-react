import React from 'react'
import { connect } from 'react-redux'

// styles
import '../styles/cell.scss'

/**
 * @param {object} state - initial state
 */
const mapStateToProps = state => {
  return {
    board: state.board,
    firstCell: state.firstCell,
    secondCell: state.secondCell
  }
}

const Cell = props => {
  /**
   * Replace two close tiles only if there are 3 match
   * @param {object} el
   */
  const replaceTiles = el => {
    const board = props.board
    const firstCell = props.firstCell
    const secondCell = {
      id: el.target.id,
      value: props.value
    }

    if (!firstCell.value) {
      return {
        type: 'SET_CELL',
        firstCell: {
          id: el.target.id,
          value: props.value
        }
      }
    }

    board.splice(firstCell.id, 1, secondCell.value)
    board.splice(secondCell.id, 1, firstCell.value)

    return {
      type: 'REPLACE_TILES',
      board
    }
  }

  return (
    <div
      id={props.id}
      className={`cell ${parseInt(props.firstCell.id) === props.id ? 'selected' : ''}`}
      onClick={el => props.dispatch(replaceTiles(el))}
    >
      {props.value}
    </div>
  )
}

export default connect(mapStateToProps)(Cell)
