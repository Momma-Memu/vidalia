import React, { useState, useEffect, useContext, useRef } from 'react';
import { authContext } from '../../Context'


const SurvivalSetup = () => {
    const { id } = useContext(authContext);
    const [charList, setCharList] = useState([]);

    useEffect(() => {
        getChars()
    }, [])

    const getChars = async() => {
        const res = await fetch(`/api/character/${id}`)
        const data = await res.json();
        console.log(data)
        setCharList(data)
    }

    const characterSelect = (e) => {
        console.log(e.target)
    }

    const charCards = charList.map((char) => {
        return (
            <div className='char-card-container'>
                <div className='survival-char-card-header'>
                    <div>{char.name}</div>
                    <div className='char-card-class-name'>{char.Class.name}</div>
                </div>
                <div className='survival-char-card-stats'>
                    <div className='survival-char-card-stat1'>{`Armor Class: ${char.armorClass}`}</div>
                    <div className='survival-char-card-stat2'>{`Charisma: ${char.charisma}`}</div>
                    <div className='survival-char-card-stat1'>{`Constitution: ${char.constitution}`}</div>
                    <div className='survival-char-card-stat2'>{`Dexterity: ${char.dexterity}`}</div>
                    <div className='survival-char-card-stat1'>{`Hit Points: ${char.hitPoints}`}</div>
                    <div className='survival-char-card-stat2'>{`Intelligence: ${char.intelligence}`}</div>
                    <div className='survival-char-card-stat1'>{`Strength: ${char.strength}`}</div>
                    <div className='survival-char-card-stat2'>{`Wisdom: ${char.wisdom}`}</div>
                </div>
                <div className='survival-char-card-footer'>
                    <div>{`Ability: ${char.Ability.name}`}</div>
                    <div>{`Weakness: ${char.Class.weakness}`}</div>
                </div>
                <div className='button-area-wrapper'>
                    <div className='select-button' onClick={characterSelect}>Select</div>
                </div>
            </div>
        )
    })

    return (
        <div className='body'>
            <div className='setup-header'>Choose your warrior</div>
            <div className='char-scroller'>
                {charCards}
            </div>
        </div>
    )
}

export default SurvivalSetup;