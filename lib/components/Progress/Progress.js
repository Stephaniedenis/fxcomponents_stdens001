import React from 'react';
import 'antd/dist/antd.css';
import { Progress as ProgressAntd } from 'antd';
import PropTypes from 'prop-types';

export const Progress =({percent})=>{

    return(
    <ProgressAntd
    percent={percent} 
    />
    )
};

Progress.propTypes ={
  percent: PropTypes.number

};



