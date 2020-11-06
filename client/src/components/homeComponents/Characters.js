import React, { useState, useEffect, useContext } from 'react';
import Nav from './Nav';
import { authContext } from '../../Context'

const Characters = () => {

    const [charList, setCharList] = useState([])
    const { id } = useContext(authContext);

    useEffect(() => {
        getChars()
    }, [])

    const getChars = async() => {
        const res = await fetch(`/api/character/${id}`)
        const data = await res.json();
        console.log(data)
        setCharList(data)
    }

    const charElements = charList.map((char) => {
        return (
            <div className='char-container'>
                <div className='char-header'>
                    <div>{char.name}</div>
                    <div>{`Class: ${char.Class.name}`}</div>
                    <div>{`Background: ${char.story}`}</div>
                    <div>{`Weakness: ${char.Class.weakness}`}</div>
                </div>
                <div className='char-stats'>
                    <div>{`Armor Class: ${char.armorClass}`}</div>
                    <div>{`Charisma: ${char.charisma}`}</div>
                    <div>{`Constitution: ${char.constitution}`}</div>
                    <div>{`Dexterity: ${char.dexterity}`}</div>
                    <div>{`Hit Points: ${char.hitPoints}`}</div>
                    <div>{`Intelligence: ${char.intelligence}`}</div>
                    <div>{`Strength: ${char.strength}`}</div>
                    <div>{`Wisdom: ${char.wisdom}`}</div>
                </div>
                <div className='char-ability'>
                    <div>{`Ability: ${char.Ability.name}`}</div>
                    <div>{`Uses: ${char.Ability.uses}`}</div>
                    <div>{`Description: ${char.Ability.description}`}</div>
                </div>
                <div className='starting-equipment'>
                    <div className='item-section'>
                        <div>{`Item: ${char.Class.Starter.Item.name}`}</div>
                        <div>{`Item: ${char.Class.Starter.Item.description}`}</div>
                    </div>
                    <div className='weapon-section'>
                        <div>{`Weapon: ${char.Class.Starter.Weapon.name}`}</div>
                        <div>{`Damage Type: ${char.Class.Starter.Weapon.damageType}`}</div>
                        <div>{`Dice Roll: ${char.Class.Starter.Weapon.hitDice}`}</div>
                        <div>{`Description: ${char.Class.Starter.Weapon.description}`}</div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <>
            <Nav />
            {charElements}
        </>
    )
}

export default Characters;