import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom'


const Nav = () => {

    return(
        <div className='nav-bar'>
            <img className='logo' src={logo} alt='logo' />
            <NavLink to='/' className='logo-nav-link'>
                <p className='vidalia-nav-title-home'>Vidalia</p>
            </NavLink>
            <Tooltip title='Barracks'>
            <i className="fab fa-fort-awesome barracks-icon"></i>
            </Tooltip>
            <Tooltip title='Quests'>
                <NavLink exact to='/quests' className='nav-links'>
                    <i className="fas fa-map-signs sign-icon"></i>
                </NavLink>
            </Tooltip>
            <Tooltip title='More'>
                <i className="fas fa-ellipsis-v more-icon"></i>
            </Tooltip>
        </div>
    )
}

export default Nav;