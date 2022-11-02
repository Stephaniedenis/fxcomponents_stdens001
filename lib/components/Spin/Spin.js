import React from 'react';
import {Spin as Spinner} from 'antd';
import PropTypes from 'prop-types';

export const Spin = ({ size }) =>{

    return(
        <Spinner 
        size={size} />
    );

}

Spin.propTypes = {
    size: PropTypes.string
};