import React from 'react'
import  './_DrawerToggle.scss';

const drawerToggle = (props) => (
    <div onClick = {props.clicked} className ='DrawerToggle'>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle;