import React from 'react';
import {Badge as BadgeAntD} from 'antd';
import PropTypes from 'prop-types';

export const Badge = ({ text, color }) =>{

    return(
        <>
        <BadgeAntD.Ribbon 
        text={text}
        color={color}>
        </BadgeAntD.Ribbon>
        </>
    );

}

Badge.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
};