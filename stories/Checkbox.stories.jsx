import React from 'react';
import './style.css'

import { Checkbox } from '../lib/components/Checkbox/Checkbox';

export default{
    title:'Components-TP1/Checkbox',
    component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const Bleu = Template.bind({});
Bleu.args={
    color: 'primary'
}

export const Violet = Template.bind({});
Violet.args={
    color: 'secondary'
}

export const Vert = Template.bind({});
Vert.args={
    color: 'success'
}