import React from 'react';
import Login from './Login';
import LandingBody from './LandingBody';
import logo from '../../images/logo.png';
import { loadUser } from '../../helpers/auth';
import { Redirect } from 'react-router-dom';

const Landing = () => {

    const { id } = loadUser();

    if (id) {
        console.log('line 38 entered.')
        return <Redirect to="/"/>;
    }

    return (
        <>
            <div className='landing-nav'>
                <img className='logo' src={logo} alt='logo' />
                <p className='vidalia-landing-title'>Vidalia</p>
                <Login />
                <div className='sign-up-button'>Sign Up</div>
            </div>
            <div className='landing-banner'>
                <div className='landing-banner-title'>Welcome to Vidalia</div>
            </div>
            <LandingBody />
        </>
    )
};



export default Landing;