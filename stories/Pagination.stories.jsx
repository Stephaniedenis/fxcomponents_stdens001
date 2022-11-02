import React from 'react';
import './style.css'

import { Pagination } from '../components/Pagination/Pagination';

export default{
    title:'Components-TP1/Pagination',
    component: Pagination
};

const Template = (args) => <Pagination {...args} />;

export const Dix = Template.bind({});
Dix.args={
    defaultCurrent: 1,
    total: 100
};
export const Vingt = Template.bind({});
Vingt.args={
    defaultCurrent: 1,
    total: 200
};
export const Trente = Template.bind({});
Trente.args={
    defaultCurrent: 1,
    total: 300
};


