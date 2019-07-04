import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import './_NavigationItems.scss';

const navigationItems = (props) =>{
    return (
        <ul className='NavigationItems'>
        <NavigationItem link="/" exact>Home</NavigationItem>
        </ul>
    )
}

export default navigationItems;