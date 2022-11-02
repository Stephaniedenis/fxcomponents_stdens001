import React from 'react';
import { Checkbox as Check } from '@mui/material';
import PropTypes from 'prop-types';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Checkbox = ({color}) =>{
    return (
        <div>
          <Check {...label} defaultChecked color={color} />
        </div>
      );

}

Checkbox.propTypes = {
    color: PropTypes.string
}