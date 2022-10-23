import React from 'react'
import './InnerBoard.css'

const InnerBoard = ({rowPos,colPos}) => {
    const innerCell = []
    const innerStyle = {
        width: '15px',
        height: '15px'
    }
    const innerCellFunc = () => {
        for(let i=1; i <= 3; i++) {
            for(let j=1; j <= 3; j++) {
                innerCell.push(<input type='text' style={innerStyle} id ={`${rowPos}${colPos}${i}${j}`}/>)
            }
        }
        return innerCell
    }
    return (
        <div className='cell' id={`${rowPos}${colPos}`}>
            <div className='Inner-board'>
                {innerCellFunc()}
            </div>
        </div>
    )
}

export default InnerBoard