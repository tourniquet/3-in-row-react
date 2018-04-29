import React from 'react'
import { connect } from 'react-redux'

// styles
import '../styles/cell.scss'

const mapStateToProps = state => {
  return {
    board: state.board,
    firstCell: state.firstCell,
    secondCell: state.secondCell
  }
}

const Cell = props => {
  const replaceColor = el => {
    const board = props.board
    const firstCell = props.firstCell
    const secondCell = {
      id: el.target.id,
      value: props.value
    }

    console.log(props)
    // console.log(el.target.value);

    // console.log(board)
    // console.log(firstCell)
    // console.log(secondCell)

    if (!firstCell.value) {
      return {
        type: 'SET_CELL',
        firstCell: {
          id: el.target.id,
          value: props.value
        }
      }
    }

    // console.log(firstCell.id)
    // console.log(secondCell.value)

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
      className={`cell ${props.firstCell.value ? 'selected' : ''}`}
      onClick={el => props.dispatch(replaceColor(el))}
    >
      {props.value}
    </div>
  )
}

export default connect(mapStateToProps)(Cell)
