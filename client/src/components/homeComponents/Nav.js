import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import logo from '../../images/logo.png';


const Nav = () => {

    return(
        <div className='nav-bar'>
            <img className='logo' src={logo} alt='logo' />
            <p className='vidalia-landing-title'>Vidalia</p>
            <Tooltip title='Barracks'>
                <div className='barracks-icon'></div>
            </Tooltip>
        </div>
    )
}

export default Nav;