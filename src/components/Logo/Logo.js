import React, { Component } from 'react';

import PizzaLogo from '../../assets/images/pizza-logo.png';
import './_Logo.scss';
import PropTypes from 'prop-types';

class Logo extends Component {
    render() {
        return (
            <div className='Logo'>
                <div className='Module Module-282'>
                    <div className='ModuleContent'>
                        <a href="/">
                            <img alt="" src="../Data/Sites/1/media/default2/img/logo.png" />
                        </a>
                    </div>
                </div>
                <img src={PizzaLogo} alt="MyPizza" />
            </div>
        )
    }
}


Logo.propTypes = {
    height: PropTypes.string.isRequired
}

export default Logo; 