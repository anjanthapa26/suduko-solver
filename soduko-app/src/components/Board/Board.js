import React, { useState, useEffect, useRef } from 'react'
import InnerBoard from '../InnerBoard/InnerBoard';
import './board.css';


const Board = () => {
  const sudokoBrd = useRef()
  const row = 3
  const col = 3
  const bigBoard = []
  let count = 1
  const sudokoBoard = []
  const sudokoContainer = () => {
    for(let i = 1; i <= row; i++) {
      for(let j = 1; j <= col; j++) {
        sudokoBoard.push([i,j])
        bigBoard.push(<InnerBoard key={count} rowPos={i} colPos={j} sboard={sudokoBrd}/>)
        count +=1
      }

    }
    return bigBoard
  }
/*
  useEffect(() => {
    const backTracker = () => {
      console.log('hello')
    }
    backTracker()
  },[demo])
*/
  console.log('rendered bigBoard')
  return (
    <div className='big-body'>
       <div className='sudoko-container' ref={sudokoBrd}>
        {sudokoContainer()}
       </div>
    </div>
  )
}

export default Board
