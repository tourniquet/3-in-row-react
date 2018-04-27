import React from 'react'
import { connect } from 'react-redux'

// styles
import '../styles/cell.scss'

const mapStateToProps = state => {
  return {
    board: state.board
  }
}

const Cell = props => {
  // const replaceColor = el => {}

  return (
    <div
      id={props.id}
      className="cell"
      // onClick={el => props.dispatch(replaceColor(el))}
    >
      {props.value}
    </div>
  )
}

export default connect(mapStateToProps)(Cell)
