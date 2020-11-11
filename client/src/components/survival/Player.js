import React, { useEffect } from 'react';

const Player = ({currentHealth, setCurrentHealth, data}) => {

    useEffect(() => {
        setCurrentHealth(data.hitPoints)
    }, [])

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
            </div>
        </div>
        <div className='use-ability-container'>
            <div>{data.Ability.name}</div>
            <div>{data.Ability.description}</div>
            <div className='use-ability-button'>Use Ability</div>
        </div>
        </>
    )
}

export default Player;