import React, { useState } from 'react';
import InfoButton from '../../helpers/InfoButton';
import itemButton from '../../helpers/useItem';


const InventoryItem = ({item, setDamageType, setStatus, items, ogHealth,
    setItems, bool, currentHealth, setCurrentHealth}) => {
    const [uses, setUses] = useState(1)

    const arrowBoolean = item.name.includes('Arrow');

    const handleQuiver = () => {
        if(item.name.includes('Poison')){
            setDamageType('poison')
        } else if(item.name.includes('Shock')){
            setDamageType('lightning')
        } else if(item.name.includes('Fire')){
            setDamageType('fire')
        } else {
            return;
        }
    }

    const itemUser = () => {
        itemButton(item, setStatus, uses, setUses, setItems, items, ogHealth, currentHealth, setCurrentHealth);

    }

    return(
        <div className='player-item-container'>
            <InfoButton data={item} />
            {arrowBoolean ? <div className='use-item-button' onClick={handleQuiver}>{`Equip`}</div> :
            !bool ? null : <div className='use-item-button' onClick={itemUser}>{`Use: ${uses}x`}</div>}
        </div>
    )
}

export default InventoryItem;