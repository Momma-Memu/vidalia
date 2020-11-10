import React, { useState, useEffect, useRef } from 'react';


const Monster = ({turnList, setTurnList, turn, setTurn, data}) => {
    // const oldClass = 'monster-card'
    const initiative = data.turn;
    const newTurnList = [...turnList]

    const highlighter = useRef();

    useEffect(() => {
        if(turn === initiative){
            highlighter.current.classList.add('highlight-card')
            setTimeout(() => {
                console.log('entered')
                highlighter.current.classList.remove('highlight-card')
                const turnSpent = newTurnList.shift()
                newTurnList.push(turnSpent)
                setTurnList(newTurnList)
                setTurn(newTurnList[0])
            }, 2000);
        }
    }, [turn, initiative])

    const rolls = Number(data.hitDice.split('d')[0])
    const sides = Number(data.hitDice.split('d')[1])
    let diceName = [data.hitDice.split('d')[1]]
    diceName.unshift('d')
    diceName = diceName.join('')

    return (
        <div className='monster-card' ref={highlighter}>
            <div className='monster-card-name'>{data.name}</div>
            <div className='monster-health'>{data.hitPoints}</div>
            <div>{data.type}</div>
            <div>{!data.turn ? '' : `Initiative: ${data.turn}`}</div>
        </div>
    )
}

export default Monster;