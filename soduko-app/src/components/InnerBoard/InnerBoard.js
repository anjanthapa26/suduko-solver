import React, { useContext, useEffect, useRef, useState } from 'react'
import {globalValueProvider} from './../../store/useContextApi'
import './InnerBoard.css'

const InnerBoard = ({rowPos,colPos,sboard}) => {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    const [elemstring, setElemString] = useState('');
    const {prevBoard,setPrevBoard} = useContext(globalValueProvider)
    //console.log('prevBoard inside innerBoard',prevBoard)
    const divTag = useRef()
    const colorBoard =[]
    const innerCell = []
    let val = 1
    const innerStyle = {
        width: '15px',
        height: '15px'
    }

    // code to create a input value for each grid that is passed down as a props from board component

    const innerCellFunc = () => {
        for(let i=1; i <= 3; i++) {
            for(let j=1; j <= 3; j++) {
                innerCell.push(<input type='text' style={innerStyle} key={val} id ={`${rowPos}${colPos}${i}${j}`}/>)
                val +=1
            }
        }
        return innerCell
    }

    // code to check for the similar input values on its horizontal or vertical axis 

    const inputFieldFinder = (e) => {
    
    }

    // code that triggers once the input element is clicked 

    const addCssProperty = (e) => {
        setElemString(e.target.id)
    }


    // code that color the 'vertical columns and horizontal row of selected input value 

    const initialHoverColor = (row1,row2,col1,col2) => {
        //console.log(row1,row2,col1,col2);
        row1 = parseInt(row1)
        row2 = parseInt(row2)
        col1 = parseInt(col1)
        col2 = parseInt(col2)
        let col11 = col1
        let col21 = col2
        const hardRow = {
            1:0,
            2:3,
            3:6
        }
        const hardCol = {
            0:-1,
            1:3,
            2:3
        }

        /*
        if(prevBoard) {
            prevBoard.forEach((elem) => {
                console.log(elem);
            })
        }
        */

        for(let i = 0; i < 3; i++) {
            col11 = col11 + hardCol[i]  
            for(let j = 0; j < 3; j++) {
                //console.log(sboard.current.children[count].children[0].children[count].id)
                if (sboard.current.children[hardRow[row1]+i].children[0].children[hardRow[row2]+j].id === `${row1}${i+1}${row2}${j+1}`) {
                    sboard.current.children[hardRow[row1]+i].children[0].children[hardRow[row2]+j].classList.add('inpColor')
                    colorBoard.push(sboard.current.children[hardRow[row1]+i].children[0].children[hardRow[row2]+j])
                }
                col21 = col21 + hardCol[j]
                console.log(col11,col21)
                if(sboard.current.children[col11].children[0].children[col21].id === `${i+1}${col1}${j+1}${col2}`) {
                    sboard.current.children[col11].children[0].children[col21].classList.add('inpColor')
                    colorBoard.push(sboard.current.children[col11].children[0].children[col21])

                }

            }
            col21 = col2
        }
        //setPrevBoard(colorBoard)
    }

    //console.log('prevboard',prevBoard)
    const findColorPosition = (strValue) => {
        initialHoverColor(strValue[0],strValue[2],strValue[1],strValue[3])
    }

    // code that executes once the input element is selected 
    useEffect(() => {
        if (elemstring.length !== 0) {
            console.log('elemString',elemstring)
            findColorPosition(elemstring)

        }
        
    },[elemstring])

    console.log('rendered innerboard')
    return (
        <div className='cell' id={`${rowPos}${colPos}`} onChange={inputFieldFinder} onClick={addCssProperty}>
            <div className='Inner-board' ref={divTag}>
                {innerCellFunc()}
            </div>
        </div>
    )
}

export default InnerBoard