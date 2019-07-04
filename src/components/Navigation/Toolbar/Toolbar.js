import React from 'react';

import './_Toolbar.scss';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className='Toolbar'>
        <div className='container'>
            <div className='row'>
                <div className='col-auto'>
                    <div className = 'Logo'>
                        {/* <Logo/> */}
                    </div>
                </div>
            </div>
        </div>
        <DrawerToggle clicked={props.drawerToggleClicked} />

        
        <nav className= 'DesktopOnly'>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;