import React, { useState, useEffect, useContext } from 'react';
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

    const charCards = charList.map((char) => {
        return (
            <div className='char-card-container'>
                <div className='survival-char-card-header'>
                    <div>{char.name}</div>
                    <div>{char.Class.name}</div>
                    <div>{char.Ability.name}</div>
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
            </div>
        )
    })

    return (
        <div className='body'>
            <div className='setup-header'>Choose your warrior</div>
            <div className='char-scroller'>
                {charCards}
            </div>
            <div>Begin</div>
        </div>
    )
}

export default SurvivalSetup;