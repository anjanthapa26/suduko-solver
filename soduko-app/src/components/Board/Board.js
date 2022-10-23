import React from 'react'
import InnerBoard from '../InnerBoard/InnerBoard';
import './board.css';

const Board = () => {

  const row = 3
  const col = 3
  const bigBoard = []
  const sudokoBoard = []
  const sudokoContainer = () => {
    for(let i = 1; i <= row; i++) {
      for(let j = 1; j <= col; j++) {
        sudokoBoard.push([i,j])
        bigBoard.push(<InnerBoard key={{i,j}} rowPos={i} colPos={j} />)
      }
    }
    return bigBoard
  }
  return (
    <div className='big-body'>
       <div className='sudoko-container'>
        {sudokoContainer()}
       </div>
    </div>
  )
}

export default Board
