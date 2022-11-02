import React from 'react';
import './style.css'

import { Spin } from '../components/Spin/Spin';

export default{
    title: 'Components-TP1/Spin',
    component: Spin
}

const Template = (args) => <Spin {...args} />;

export const Small = Template.bind({});
Small.args={
    size:'small'
}

export const Medium = Template.bind({});
Medium.args={
    size:'medium'
}

export const Large = Template.bind({});
Large.args={
    size:'large'
}