import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import logo from '../../images/logo.png';


const Nav = () => {

    return(
        <div className='nav-bar'>
            <img className='logo' src={logo} alt='logo' />
            <p className='vidalia-landing-title'>Vidalia</p>
            <Tooltip title='Barracks'>
            <i className="fab fa-fort-awesome barracks-icon"></i>
            </Tooltip>
            <Tooltip title='Quests'>
                <i className="fas fa-map-signs sign-icon"></i>
            </Tooltip>
            <Tooltip title='More'>
                <i className="fas fa-ellipsis-v more-icon"></i>
            </Tooltip>
        </div>
    )
}

export default Nav;