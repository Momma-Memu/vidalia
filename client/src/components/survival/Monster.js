import React, { useEffect, useRef } from 'react';
import { Dice, d20 } from '../../helpers/dice'

const Monster = ({currentHealth, setCurrentHealth, playerData, turnList, setTurnList, turn, setTurn, data}) => {
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
        const initialDamage = attackDice.roll(rolls);
        let damage = initialDamage - playerData[0].armorClass
        if(damage < 0){
            damage = 0
        }

        const monsterAccuracy = d20.roll(1) + (data.dexterity - 8)
        const playerDodge = d20.roll(1) + (data.constitution - 8)
        console.log(monsterAccuracy)
        console.log(playerDodge)
        console.log(damage)

        if(monsterAccuracy > playerDodge){
            const newHealth = currentHealth - damage;

            setCurrentHealth(newHealth);
        }
    }

    return (
        <div className='monster-card' ref={highlighter}>
            <div className='monster-card-name'>{data.name}</div>
            <div className='monster-health'>{data.hitPoints}</div>
            <div>{data.type}</div>
            <div>{!data.turn ? '' : `Initiative: ${data.turn}`}</div>
            <div className='attack-buttn'>Attack</div>
        </div>
    )
}

export default Monster;