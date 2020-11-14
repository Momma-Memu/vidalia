import React from 'react';


const PlayerCard = ({data}) => {

    return (
        <div className='player-card-level-up-container'>
            <div className='player-card-level-up-header'>
                <div className='player-card-name'>{data.name}</div>
                <div className='player-card-class'>{data.Class.name}</div>
            </div>

        </div>
    )
}

export default PlayerCard;