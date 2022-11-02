import React from 'react';
import { Button as ButtonMui } from '@mui/material';
import PropTypes from 'prop-types';

export const Button = ({variant, color, size, disabled, text}) =>{

    return(
        <>
        <ButtonMui
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        >
            {text}
        </ButtonMui>
        </>
    );
}

Button.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    disabled:PropTypes.bool,
    text: PropTypes.string
}