import React from 'react';
import './style.css'

import { Alert } from '../components/Alert/Alert';

export default{
    title:'Components-TP1/Alert',
    component: Alert
};

const Template = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args={
    variant:'outlined',
    color: 'success',
    severity: 'success'
}

export const Error = Template.bind({});
Error.args={
    variant:'outlined',
    color: 'error',
    severity: 'error'
}

export const Info = Template.bind({});
Info.args={
    variant:'outlined',
    color: 'info',
    severity: 'info'
}