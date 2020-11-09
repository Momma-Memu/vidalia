import React, { useState } from 'react';

const Player = ({data}) => {
    console.log(data)

    return (
        <div className='char-card-container'>
            <div className='survival-char-card-header'>
                <div>{data.name}</div>
                <div className='char-card-class-name'>{data.Class.name}</div>
            </div>
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
                <div>{`Ability: ${data.Ability.name}`}</div>
                <div>{`Weakness: ${data.Class.weakness}`}</div>
            </div>
        </div>
    )
}

export default Player;