import React from 'react'

import classes from './_Backdrop.scss';
import PropTypes from 'prop-types';
const backDrop = (props) => (
    props.show? <div className={classes.Backdrop} onClick ={this.props.clicked}></div> :null
)

backDrop.PropTypes = {
    show : PropTypes.bool.isRequired
}
export default backDrop;