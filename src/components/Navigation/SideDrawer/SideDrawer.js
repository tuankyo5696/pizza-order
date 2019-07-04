import React from 'react'

import classes from './_SideDrawer.scss';
import PropTypes from 'prop-types';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    return (
        <>
        <div>

        </div>
        </>
    )
}

sideDrawer.propTypes = {
    open: PropTypes.bool.isRequired
}

export default sideDrawer;
