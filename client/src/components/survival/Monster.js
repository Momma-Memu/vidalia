import React, { useEffect, useRef } from 'react';
import { Dice } from '../../helpers/dice'

const Monster = ({currentHealth, setCurrentHealth, playerData, turnList, setTurnList, turn, setTurn, data}) => {
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
                attackPlayer();
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

    const attackPlayer = () => {
        const attackDice = new Dice(diceName, sides)
        const damage = attackDice.roll(rolls);
        const newHealth = currentHealth - (damage - (Math.floor(playerData[0].armorClass / 2)));
        setCurrentHealth(newHealth);
    }

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