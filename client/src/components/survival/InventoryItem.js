import React, { useState } from 'react';
import InfoButton from '../../helpers/InfoButton';


const InventoryItem = ({item}) => {
    const [uses, setUses] = useState(1)

    return(
        <div className='player-item-container'>
            <div className='item-name'>{item.name}</div>
            <InfoButton data={item} />
            <div className='use-item-button'>{`Use: ${uses}x`}</div>
        </div>
    )
}

export default InventoryItem;