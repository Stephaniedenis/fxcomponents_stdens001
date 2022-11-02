import React from 'react';
import { Alert as AlertMui } from '@mui/material';
import PropTypes from 'prop-types';

export const Alert = ({variant, color, severity}) =>{


return(
    <>
    <AlertMui 
    variant={variant}
    severity={severity} 
    color={color}>
    Texte à remplacer dans le cadre d'une alerte
    </AlertMui>
    </>
);
}

Alert.propTypes = {
    variant: PropTypes.string,
    severity: PropTypes.string,
    color: PropTypes.string
}