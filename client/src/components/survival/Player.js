import React, { useEffect } from 'react';
import { subtractUse } from '../../helpers/useAbility';
import { statusSetter } from '../../helpers/statusSetter';
import InfoButton from '../../helpers/InfoButton';

const Player = ({ playerData, items, setPlayerData, status, setStatus, setTurn, turnList, setTurnList, currentHealth, setCurrentHealth, data}) => {

    useEffect(() => {
        if(turnList.length <= 0){
            setCurrentHealth(data.hitPoints)
        }
    }, [status])

    const newTurnList = [...turnList]

    let abilityBoolean = turnList.length > 0 && turnList[0] === data.turn;

    if(currentHealth <= 0){
        abilityBoolean = false;
    }

    const useAbility = () => {
        if(data.Ability.uses <= 0) return;

        subtractUse(playerData[0], setPlayerData);
        statusSetter(data.Ability.name, setStatus)

        const turnSpent = newTurnList.shift()
        newTurnList.push(turnSpent)
        setTurnList(newTurnList)
        setTurn(newTurnList[0])
    }

    const itemElements = items.map((item) => {
        return (
            <div className='player-item-container'>
                <div className='item-name'>{item.name}</div>
                <InfoButton data={item} />
            </div>
        )
    })

    return (
        <>
            <div className='char-card-container'>
                <div className='survival-char-card-header'>
                    <div>{data.name}</div>
                    <div className='char-card-class-name'>{data.Class.name}</div>
                </div>
                <div className='HP-bar'>{currentHealth}</div>
                <div className='survival-char-card-stats'>
                    <div className='survival-char-card-stat1'>{`Armor Class: ${data.armorClass}`}</div>
                    <div className='survival-char-card-stat2'>{`Charisma: ${data.charisma}`}</div>
                    <div className='survival-char-card-stat1'>{`Constitution: ${data.constitution}`}</div>
                    <div className='survival-char-card-stat2'>{`Dexterity: ${data.dexterity}`}</div>
                    <div className='survival-char-card-stat1'>{`Hit Points: ${data.hitPoints}`}</div>
                    <div className='survival-char-card-stat2'>{`Intelligence: ${data.intelligence}`}</div>
                    <div className='survival-char-card-stat1'>{`Strength: ${data.strength}`}</div>
                    <div className='survival-char-card-stat2'>{`Wisdom: ${data.wisdom}`}</div>
                </div>
                <div className='survival-char-card-footer'>
                    <div>{!data.turn ? '' : `Initiative: ${data.turn}`}</div>
                    <div>{`Ability: ${data.Ability.name}`}</div>
                    <div>{`Weakness: ${data.Class.weakness}`}</div>
                    <div>{!status ? '' : status}</div>
                </div>
            </div>
            <div className='inventory-container'>
                <div className='equipment-header'>Equipment</div>
                <div className='use-ability-container'>
                    <div className='ability-name'>{data.Ability.name}</div>
                    <InfoButton data={data.Ability} />
                    {!abilityBoolean ? null : <div className='use-ability-button' onClick={useAbility}>{`Use: ${data.Ability.uses}x`}</div>}
                </div>
                <div>
                    {itemElements}
                </div>
            </div>
        </>
    )
}

export default Player;