import React, { useContext } from 'react';
import { survivalPlayer } from '../../Context';


const Drop = ({data}) => {
    const { items, setItems } = useContext(survivalPlayer);


    const pickUpItem = () => {
        setItems([...items, data])
    }

    return(
        <div className='drop-item-container'>
            <div className='drop-name'>{data.name}</div>
            <div className='drop-description'>{data.description}</div>
            <div className='drop-body'>
                {!data.damageType ? null : <div className='drop-info1'>{`Damage Type: ${data.damageType}`}</div>}
                {!data.hitDice ? null : <div className='drop-info2'>{`Hit Dice: ${data.hitDice}`}</div>}
            </div>
            <div className='item-button-wrapper'>
                {!data.damageType ? <div className='item-button' onClick={pickUpItem}>{`Pick up ${data.name}`}</div> : <div className='item-button'>{`Equip ${data.name}`}</div>}
            </div>
        </div>
    )
}

export default Drop;
