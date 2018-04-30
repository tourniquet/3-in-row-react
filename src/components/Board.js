import React from 'react'
import { connect } from 'react-redux'

// component
import Cell from './Cell'

// styles
import '../styles/board.scss'

const mapStateToProps = state => {
  return { board: state.board }
}

const Board = props => {
  return (
    <div className='board'>
      { props.board.map((cell, i) =>
        <Cell
          key={i}
          id={i}
          value={cell.toString()}
        />
      )}
    </div>
  )
}

export default connect(mapStateToProps)(Board)
