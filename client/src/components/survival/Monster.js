import React, { useState, useEffect, useRef } from 'react';
import { Dice, d20 } from '../../helpers/dice'

const Monster = ({currentHealth, setCurrentHealth, playerData, turnList,
    setTurnList, turn, setTurn, data, enemies, setEnemies, setStatus, status}) => {

    const initiative = data.turn;
    const newTurnList = [...turnList]
    const [monstHealth, setMonstHealth] = useState(data.hitPoints);

    let attackBoolean = turnList.length > 0 && turnList[0] === playerData[0].turn;
    const highlighter = useRef();

    if(currentHealth <= 0){
        attackBoolean = false;
    }

    useEffect(() => {
        if(turn === initiative){
            highlighter.current.classList.add('highlight-card')
            setTimeout(() => {
                highlighter.current.classList.remove('highlight-card')
                const turnSpent = newTurnList.shift()
                newTurnList.push(turnSpent)
                attackPlayer();
                setTurnList(newTurnList)
                setTurn(newTurnList[0])
                if(turnList[1] === playerData[0].turn) setStatus('');
            }, 1000);
        }
    }, [turn, initiative, monstHealth])

    const rolls = Number(data.hitDice.split('d')[0])
    const sides = Number(data.hitDice.split('d')[1])
    let diceName = [data.hitDice.split('d')[1]]
    diceName.unshift('d')
    diceName = diceName.join('')

    const attackPlayer = () => {
        if(status === 'immune') return;
        const attackDice = new Dice(diceName, sides)
        const initialDamage = attackDice.roll(rolls);
        let damage = initialDamage - (Math.floor(playerData[0].armorClass / 2))

        if(damage < 0){
            damage = 0
        }

        const monsterAccuracy = d20.roll(1) + (data.dexterity - 10)
        const playerDodge = d20.roll(1) + (playerData[0].armorClass - 10)

        if(monsterAccuracy > playerDodge){
            const newHealth = currentHealth - damage;
            setCurrentHealth(newHealth);
        }
    }

    const handleAttack = () => {
        const base = playerData[0].Class.Starter.Weapon.hitDice
        const pRolls = Number(base.split('d')[0])
        const pSides = Number(base.split('d')[1])
        let pDiceName = [base.split('d')[1]]
        pDiceName.unshift('d')
        pDiceName = pDiceName.join('')

        const attackDice = new Dice(diceName, pSides)
        const initialDamage = attackDice.roll(pRolls);
        let damage = initialDamage - (Math.floor(data.armorClass / 2));

        if(damage < 0) damage = 0;
        const monsterDodge = d20.roll(1) + (data.armorClass - 10)
        const playerAccuracy = d20.roll(1) + (playerData[0].dexterity - 10)
        if(playerAccuracy > monsterDodge){
            const newHealth = monstHealth - damage;

            if(newHealth <= 0){
                killMonster();
            } else {
                setMonstHealth(newHealth);
            }
        }
        const turnSpent = newTurnList.shift()
        newTurnList.push(turnSpent)
        setTurnList(newTurnList)
        setTurn(newTurnList[0])
    }

    const killMonster = () => {
        let newEnemies = []
        for(let i = 0; i < enemies.length; i++){
            const enemy = enemies[i]
            if(enemy.name !== data.name) newEnemies.push(enemy)
        }
        let newTurns = []
        for(let i = 0; i < turnList.length; i++){
            let x = turnList[i]
            if(x !== initiative) newTurns.push(x)
        }
        console.log(`new turn list:`, newTurns)
        setTurnList(newTurns)
        setEnemies(newEnemies)
    }

    return (
        <div className='monster-card' ref={highlighter}>
            <div className='monster-card-name'>{data.name}</div>
            <div className='monster-health'>{monstHealth}</div>
            <div>{data.type}</div>
            <div>{!data.turn ? '' : `Initiative: ${data.turn}`}</div>
            {!attackBoolean ? null : <div className='attack-buttn' onClick={handleAttack}>Attack</div>}
        </div>
    )
}

export default Monster;